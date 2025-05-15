package com.kidsland.be.dto;

import com.kidsland.be.constants.Color;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Builder
public class Item {

    private String name;

    private String brand;

    private String type;

    private String description;

    private Integer quantity;

    private Integer reserved;

    private Integer size;

    private Boolean isAvailable;

    private UUID itemId;

    private List<Color> colors;
}
