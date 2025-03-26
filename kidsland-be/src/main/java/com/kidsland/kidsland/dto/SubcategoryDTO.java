package com.kidsland.kidsland.dto;

import com.kidsland.kidsland.data.entity.Category;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class SubcategoryDTO {

    private Long id;

    private Category category;

    private String description;

    private Boolean hidden;

    private UUID subcategoryId;

    private String name;
}
