package com.kidsland.kidsland.data.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.OffsetDateTime;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.UUID;

@Getter
@Setter
@Entity
@Accessors(chain = true)
@Table(name = "obj_registration_request", schema = "db")
@EntityListeners(AuditingEntityListener.class)
public class ObjRegistrationRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "item", nullable = false)
    private Long item;

    @Column(name = "processing_status")
    private Integer processingStatus;

    @CreatedDate
    @Column(name = "tech_create_date", nullable = false)
    private OffsetDateTime techCreateDate;

    @CreatedBy
    @Column(name = "tech_create_identity_id", nullable = false)
    private UUID techCreateIdentityId;

    @OneToMany(mappedBy = "request")
    private Set<ObjError> objErrors = new LinkedHashSet<>();

}