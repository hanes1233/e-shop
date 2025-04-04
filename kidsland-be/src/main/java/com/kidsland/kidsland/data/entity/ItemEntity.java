package com.kidsland.kidsland.data.entity;

import java.io.Serial;
import java.io.Serializable;
import java.util.UUID;

public interface ItemEntity extends Serializable {
    @Serial
    long serialVersionUID = 1L;

    Long getId();

    Long getCategoryId();

    Long getSubcategoryId();

    String getItemName();

    UUID getItemId();
}
