package com.kidsland.kidsland.data.entity.base;

import com.kidsland.kidsland.data.entity.subcategories.RelItem;

import java.util.UUID;

public interface Item {

    Long getId();

    Long getCategoryId();

    Long getSubcategoryId();

    String getItemName();

    UUID getItemId();

    RelItem getItem();

    void setItem(RelItem item);
}
