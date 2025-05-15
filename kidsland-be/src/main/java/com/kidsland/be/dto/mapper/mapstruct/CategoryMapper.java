package com.kidsland.be.dto.mapper.mapstruct;

import com.kidsland.be.data.entity.Category;
import com.kidsland.be.dto.CategoryDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategoryMapper {

    CategoryDTO mapToCategoryDTO(Category categoryToMap);
}
