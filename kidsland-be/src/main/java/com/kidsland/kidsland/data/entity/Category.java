package com.kidsland.kidsland.data.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "category", schema = "fc")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ColumnDefault("nextval('fc.category_id_seq')")
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "description", length = 250)
    private String description;

    @ColumnDefault("gen_random_uuid()")
    @Column(name = "category_id", nullable = false)
    private UUID categoryId;

    @Column(name = "name", nullable = false, length = 30)
    private String name;

}