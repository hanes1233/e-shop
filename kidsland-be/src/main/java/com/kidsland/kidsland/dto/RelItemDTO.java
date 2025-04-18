package com.kidsland.kidsland.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.OffsetDateTime;
import java.util.UUID;

@Getter
@Setter
public class RelItemDTO {

    private Long id;

    private SubcategoryDTO subcategory;

    private CategoryDTO category;

    private String itemName;

    private String brand;

    private Integer reserved;

    private String colors;

    private String type;

    private Integer quantity;

    private Boolean isAvailable;

    private OffsetDateTime itemCreateDate;

    private String description;

    private Integer size;

    private UUID itemId;
}
