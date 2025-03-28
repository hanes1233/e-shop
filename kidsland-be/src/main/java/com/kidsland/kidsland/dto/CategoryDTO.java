package com.kidsland.kidsland.dto;

import com.kidsland.kidsland.data.entity.Subcategory;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class CategoryDTO {

    private Long id;

    private String description;

    private Boolean hidden;

    private String url;

    private UUID categoryId;

    private String name;

    private List<Subcategory> subcategories;
}
