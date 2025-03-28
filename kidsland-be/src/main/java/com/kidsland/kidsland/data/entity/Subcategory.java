package com.kidsland.kidsland.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "subcategory", schema = "fc")
public class Subcategory {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "subcategory_id_gen")
    @SequenceGenerator(name = "subcategory_id_gen", sequenceName = "subcategory_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Long id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(name = "description", length = 250)
    private String description;

    @Column(name = "url", nullable = false, length = 50)
    private String url;

    @ColumnDefault("false")
    @Column(name = "hidden", nullable = false)
    private Boolean hidden = false;

    @ColumnDefault("gen_random_uuid()")
    @Column(name = "subcategory_id", nullable = false)
    private UUID subcategoryId;

    @Column(name = "name", nullable = false, length = 30)
    private String name;

}