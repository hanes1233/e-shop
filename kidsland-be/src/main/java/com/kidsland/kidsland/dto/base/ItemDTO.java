package com.kidsland.kidsland.dto.base;

import com.kidsland.kidsland.dto.RelItemDTO;

import java.util.UUID;

public interface ItemDTO {

    RelItemDTO getItem();

    UUID getItemId();

    Long getId();

    Long getCategoryId();

    Long getSubcategoryId();

    String getItemName();

    void setItem(RelItemDTO item);
}
