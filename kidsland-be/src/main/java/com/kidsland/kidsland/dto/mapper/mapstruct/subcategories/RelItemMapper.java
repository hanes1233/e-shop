package com.kidsland.kidsland.dto.mapper.mapstruct.subcategories;

import com.kidsland.kidsland.data.entity.subcategories.RelItem;
import com.kidsland.kidsland.dto.RelItemDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RelItemMapper {

    @Mapping(target = "category", source = "relItemDTOToMap.category")
    @Mapping(target = "subcategory", source = "relItemDTOToMap.subcategory")
    @Mapping(target = "techCreateIdentityId", ignore = true)
    @Mapping(target = "techCreateDate", ignore = true)
    @Mapping(target = "techUpdateDate", ignore = true)
    @Mapping(target = "techUpdateIdentityId", ignore = true)
    RelItem mapToRelItem(RelItemDTO relItemDTOToMap);
}
