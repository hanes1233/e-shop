package com.kidsland.kidsland.dto.mapper.mapstruct.subcategories;

import com.kidsland.kidsland.data.entity.subcategories.Accessory;
import com.kidsland.kidsland.dto.AccessoryDTO;
import com.kidsland.kidsland.dto.mapper.api.ItemMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AccessoryMapper extends ItemMapper<AccessoryDTO, Accessory> {

    @Mapping(target = "item", source = "entity.item")
    AccessoryDTO mapToDTO(Accessory entity);

    @Mapping(target = "item", source = "dto.item")
    Accessory mapToEntity(AccessoryDTO dto);
}
