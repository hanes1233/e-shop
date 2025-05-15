package com.kidsland.be.dto.mapper.custom;

import com.kidsland.be.data.entity.subcategories.Accessory;
import com.kidsland.be.dto.Item;
import com.kidsland.be.core.mapper.AbstractMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class CustomAccessoryMapper implements AbstractMapper<Accessory, Item> {
    @Override
    public Accessory mapToDTO(Item item) {
        return null;
    }

    @Override
    public Item mapToEntity(Accessory accessory) {
        if (accessory.getItem() == null) {
            log.error("Important object RelItem not found in Accessory object. Item cannot be created.");
            return null;
        }
        return Item.builder()
                .name(accessory.getItemName())
                .description(accessory.getItem().getDescription())
                .size(accessory.getItem().getSize())
                .type(accessory.getItem().getType())
                .brand(accessory.getItem().getBrand())
                .itemId(accessory.getItemId())
                .colors(accessory.getColors())
                .isAvailable(accessory.getItem().getIsAvailable())
                .quantity(accessory.getItem().getQuantity())
                .reserved(accessory.getItem().getReserved())
                .build();
    }
}
