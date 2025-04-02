package com.kidsland.kidsland.dto;

import com.kidsland.kidsland.constants.Colors;
import com.kidsland.kidsland.data.entity.subcategories.RelItem;

import java.util.List;
import java.util.UUID;

public class AccessoryDTO {

    private Long id;

    private RelItem item;

    private String type;

    private UUID accessoriesId;

    private List<Colors> colors;
}
