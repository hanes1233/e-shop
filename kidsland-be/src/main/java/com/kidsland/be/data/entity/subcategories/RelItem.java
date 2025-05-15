package com.kidsland.be.data.entity.subcategories;

import com.kidsland.be.core.entity.AbstractEntity;
import com.kidsland.be.data.entity.Category;
import com.kidsland.be.data.entity.Subcategory;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.OffsetDateTime;
import java.util.UUID;

@Getter
@Setter
@Entity
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rel_item", schema = "fc")
public class RelItem extends AbstractEntity {

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "subcategory_id", nullable = false)
    private Subcategory subcategory;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(name = "item_name", nullable = false, length = 30)
    private String itemName;

    @Column(name = "brand", nullable = false, length = 30)
    private String brand;

    @ColumnDefault("0")
    @Column(name = "reserved", nullable = false)
    private Integer reserved;

    @Column(name = "colors", nullable = false, length = 50)
    private String colors;

    @Column(name = "type", nullable = false, length = 30)
    private String type;

    @ColumnDefault("0")
    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @ColumnDefault("false")
    @Column(name = "is_available")
    private Boolean isAvailable;

    @ColumnDefault("'2025-03-02 23:00:00+00'")
    @Column(name = "item_create_date", nullable = false)
    private OffsetDateTime itemCreateDate;

    @Column(name = "description", length = 250)
    private String description;

    @Column(name = "size")
    private Integer size;

    @ColumnDefault("gen_random_uuid()")
    @Column(name = "item_id", nullable = false)
    private UUID itemId;

    @OneToOne(mappedBy = "item")
    private Accessory accessory;

    @OneToOne(mappedBy = "item")
    private Baby baby;

    @OneToOne(mappedBy = "item")
    private Dress dress;

    @OneToOne(mappedBy = "item")
    private Furniture furniture;

    @OneToOne(mappedBy = "item")
    private Shoe shoe;

    @OneToOne(mappedBy = "item")
    private Sport sport;

    @OneToOne(mappedBy = "item")
    private Toy toy;
}