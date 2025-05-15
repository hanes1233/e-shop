package com.kidsland.be.data.entity.base;

import com.kidsland.be.data.entity.subcategories.RelItem;

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
