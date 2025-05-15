package com.kidsland.be.data.entity;

import com.kidsland.be.core.entity.AbstractEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Accessors(chain = true)
@Table(name = "obj_registration_request", schema = "db")
@EntityListeners(AuditingEntityListener.class)
public class KidslandRegistrationRequest extends AbstractEntity {

    @Column(name = "item", nullable = false)
    private Long item;

    @Column(name = "processing_status")
    private Integer processingStatus;

    @OneToMany(mappedBy = "request")
    private Set<KidslandError> kidslandErrors = new LinkedHashSet<>();

}