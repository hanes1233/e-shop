package com.kidsland.kidsland.core.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.io.Serial;
import java.io.Serializable;
import java.time.OffsetDateTime;
import java.util.UUID;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class AbstractEntity implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    protected Long id;

    @CreatedDate
    @Column(name = "tech_create_date", nullable = false)
    protected OffsetDateTime techCreateDate;

    @CreatedBy
    @Column(name = "tech_create_identity_id", nullable = false)
    protected UUID techCreateIdentityId;

    @LastModifiedDate
    @Column(name = "tech_update_date")
    protected OffsetDateTime techUpdateDate;

    @LastModifiedBy
    @Column(name = "tech_update_identity_id")
    protected UUID techUpdateIdentityId;
}
