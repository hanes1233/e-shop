package com.kidsland.kidsland.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class CategoryDTO {

    private Long id;

    private String description;

    private UUID categoryId;

    private String name;

}
