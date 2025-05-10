package com.kidsland.kidsland.data.entity;

import com.kidsland.kidsland.core.entity.AbstractEntity;
import com.kidsland.kidsland.data.entity.base.Communication;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "obj_email", schema = "db")
public class KidslandEmail extends AbstractEntity implements Communication {

    @Column(name = "email", nullable = false, length = 50)
    private String email;

    @Column(name = "subject", nullable = false, length = 50)
    private String subject;

    @Column(name = "message", nullable = false, length = Integer.MAX_VALUE)
    private String message;
}