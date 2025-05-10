package com.kidsland.kidsland.dto.mapper.mapstruct.subcategories;

import com.kidsland.kidsland.data.entity.subcategories.Accessory;
import com.kidsland.kidsland.dto.AccessoryItemDTO;
import com.kidsland.kidsland.core.mapper.AbstractMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AccessoryMapper extends AbstractMapper<AccessoryItemDTO, Accessory> {

    @Mapping(target = "item", source = "entity.item")
    AccessoryItemDTO mapToDTO(Accessory entity);

    @Mapping(target = "techCreateIdentityId", ignore = true)
    @Mapping(target = "techCreateDate", ignore = true)
    @Mapping(target = "techUpdateDate", ignore = true)
    @Mapping(target = "techUpdateIdentityId", ignore = true)
    @Mapping(target = "item", source = "dto.item")
    Accessory mapToEntity(AccessoryItemDTO dto);
}
