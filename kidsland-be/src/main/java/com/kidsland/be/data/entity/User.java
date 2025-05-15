package com.kidsland.be.data.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.time.OffsetDateTime;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

import static com.kidsland.be.constants.Role.ADMIN;
import static com.kidsland.be.constants.Role.USER;

@Getter
@Setter
@Entity
@Accessors(chain = true)
@Table(name = "user_h", schema = "fc")
public class User implements Serializable, UserDetails {
    @Id
    @Column(name = "email", nullable = false, length = 20)
    private String email;

    @Column(name = "password", nullable = false, length = 250)
    private String password;

    @Column(name = "identity_id", nullable = false)
    private UUID identityId;

    @ColumnDefault("false")
    @Column(name = "administrator", nullable = false)
    private Boolean administrator = false;

    @ColumnDefault("false")
    @Column(name = "access_blocked", nullable = false)
    private Boolean accessBlocked = false;

    @ColumnDefault("false")
    @Column(name = "read_only", nullable = false)
    private Boolean readOnly = false;

    @ColumnDefault("'1899-12-31 23:00:00+00'")
    @Column(name = "valid_from", nullable = false)
    private OffsetDateTime validFrom;

    @ColumnDefault("'2999-12-30 23:00:00+00'")
    @Column(name = "valid_to", nullable = false)
    private OffsetDateTime validTo;

    @Column(name = "tech_create_date", nullable = false)
    private OffsetDateTime techCreateDate;

    @Column(name = "tech_create_identity_id", nullable = false)
    private UUID techCreateIdentityId;

    @Column(name = "tech_update_date")
    private OffsetDateTime techUpdateDate;

    @Column(name = "tech_update_identity_id")
    private UUID techUpdateIdentityId;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (!isAccountNonExpired() || !isAccountNonLocked() || !isCredentialsNonExpired() || !isEnabled()) {
            return List.of();
        } else {
            if (Boolean.TRUE.equals(administrator) || Boolean.TRUE.equals(!readOnly)) {
                return List.of(new SimpleGrantedAuthority("ROLE_" + ADMIN.name()));
            }
            return List.of(new SimpleGrantedAuthority("ROLE_" + USER.name()));
        }
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.validTo.isAfter(OffsetDateTime.now());
    }

    @Override
    public boolean isAccountNonLocked() {
        return !this.accessBlocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}