package com.kidsland.kidsland.data.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "category", schema = "fc")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_id_gen")
    @SequenceGenerator(name = "category_id_gen", sequenceName = "category_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "description", length = 250)
    private String description;

    @ColumnDefault("false")
    @Column(name = "hidden", nullable = false)
    private Boolean hidden = false;

    @ColumnDefault("false")
    @Column(name = "is_gender_specific")
    private Boolean isGenderSpecific;

    @ColumnDefault("false")
    @Column(name = "is_special_offer")
    private Boolean isSpecialOffer;

    @ColumnDefault("gen_random_uuid()")
    @Column(name = "category_id", nullable = false)
    private UUID categoryId;

    @Column(name = "name", nullable = false, length = 30)
    private String name;

    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private List<Subcategory> subcategories;
}