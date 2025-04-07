package com.kidsland.kidsland.dto;

import com.kidsland.kidsland.constants.Color;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class AccessoryDTO implements DTO {

    private Long id;

    private RelItemDTO item;

    private UUID accessoriesId;

    private List<Color> colors;

    @Override
    public UUID getItemId() {
        return this.accessoriesId;
    }
}
