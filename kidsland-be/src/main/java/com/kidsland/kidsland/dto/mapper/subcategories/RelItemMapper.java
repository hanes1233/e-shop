package com.kidsland.kidsland.dto.mapper.subcategories;

import com.kidsland.kidsland.data.entity.subcategories.RelItem;
import com.kidsland.kidsland.dto.RelItemDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RelItemMapper {

    @Mapping(target = "category", source = "relItemDTOToMap.category")
    @Mapping(target = "subcategory", source = "relItemDTOToMap.subcategory")
    RelItem mapToRelItem(RelItemDTO relItemDTOToMap);
}
