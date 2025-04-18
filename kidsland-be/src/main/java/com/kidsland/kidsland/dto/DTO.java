package com.kidsland.kidsland.dto;

import java.util.UUID;

public interface DTO {

    RelItemDTO getItem();

    UUID getItemId();

    Long getId();

    Long getCategoryId();

    Long getSubcategoryId();

    String getItemName();

    void setItem(RelItemDTO item);
}
