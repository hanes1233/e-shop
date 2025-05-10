package com.kidsland.kidsland.dto;

import com.kidsland.kidsland.constants.Color;
import com.kidsland.kidsland.core.dto.AbstractDTO;
import com.kidsland.kidsland.dto.base.ItemDTO;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class AccessoryItemDTO extends AbstractDTO implements ItemDTO {

    private RelItemDTO item;

    private UUID accessoriesId;

    private List<Color> colors;

    @Override
    public Long getCategoryId() {
        if (item == null) {
            return null;
        }
        var category = item.getCategory();
        if (category == null) {
            return null;
        }
        return category.getId();
    }

    @Override
    public Long getSubcategoryId() {
        if (item == null) {
            return null;
        }
        var subcategory = item.getSubcategory();
        if (subcategory == null) {
            return null;
        }
        return subcategory.getId();
    }

    @Override
    public String getItemName() {
        if (item == null) {
            return null;
        }
        return item.getItemName();
    }

    @Override
    public UUID getItemId() {
        return accessoriesId;
    }

    @Override
    public void setItem(RelItemDTO item) {
        this.item = item;
    }
}
