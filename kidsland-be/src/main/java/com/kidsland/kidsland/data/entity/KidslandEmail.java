package com.kidsland.kidsland.data.entity;

import com.kidsland.kidsland.core.entity.AbstractEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "obj_email", schema = "db")
public class KidslandEmail extends AbstractEntity {

    @Column(name = "email", nullable = false, length = 50)
    private String email;

    @Column(name = "subject", nullable = false, length = 50)
    private String subject;

    @Column(name = "message", nullable = false, length = Integer.MAX_VALUE)
    private String message;
}