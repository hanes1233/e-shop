package com.kidsland.be.data.entity;

import com.kidsland.be.core.entity.AbstractEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.ColumnDefault;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "category", schema = "fc")
public class Category extends AbstractEntity {

    @Column(name = "description", length = 250)
    private String description;

    @ColumnDefault("false")
    @Column(name = "hidden", nullable = false)
    private Boolean hidden = false;

    @Column(name = "url", nullable = false, length = 50)
    private String url;

    @ColumnDefault("gen_random_uuid()")
    @Column(name = "category_id", nullable = false)
    private UUID categoryId;

    @Column(name = "name", nullable = false, length = 30)
    private String name;

    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private List<Subcategory> subcategories;
}