package com.kidsland.kidsland.service.impl;

import com.kidsland.kidsland.data.entity.Category;
import com.kidsland.kidsland.data.repository.CategoryRepository;
import com.kidsland.kidsland.dto.CategoryDTO;
import com.kidsland.kidsland.dto.ResultDTO;
import com.kidsland.kidsland.dto.mapper.CategoryMapper;
import com.kidsland.kidsland.service.api.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    @Override
    public ResponseEntity<ResultDTO> getCategories() {
        List<Category> categories = categoryRepository.findTopTenVisible();
        List<CategoryDTO> categoryDTOS = categories.stream()
                .map(categoryMapper::mapToCategoryDTO)
                .toList();
        ResultDTO result = new ResultDTO()
                .setCategories(categoryDTOS);
        return ResponseEntity.ok(result);
    }
}
