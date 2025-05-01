package com.kidsland.kidsland.core.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import org.hibernate.annotations.ColumnDefault;

import java.time.OffsetDateTime;
import java.util.UUID;

@Embeddable
public class ItemEntity {

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
}
