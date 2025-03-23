package com.kidsland.kidsland.dto.mapper;


import com.kidsland.kidsland.data.entity.Category;
import com.kidsland.kidsland.dto.CategoryDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategoryMapper {

    CategoryDTO mapToCategoryDTO(Category source);
}
