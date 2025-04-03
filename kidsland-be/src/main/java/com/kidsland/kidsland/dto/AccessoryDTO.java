package com.kidsland.kidsland.dto;

import com.kidsland.kidsland.constants.Color;
import com.kidsland.kidsland.data.entity.subcategories.RelItem;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class AccessoryDTO {

    private Long id;

    private RelItem item;

    private UUID accessoriesId;

    private List<Color> colors;
}
