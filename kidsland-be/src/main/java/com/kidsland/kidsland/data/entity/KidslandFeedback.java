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
@Entity
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "obj_feedback", schema = "db")
public class KidslandFeedback extends AbstractEntity implements Communication {

    @Column(name = "email", nullable = false, length = 50)
    private String email;

    @Column(name = "message", nullable = false, length = Integer.MAX_VALUE)
    private String message;

    @Column(name = "star")
    private Integer star;

    @Column(name = "name", length = 50)
    private String name;
}