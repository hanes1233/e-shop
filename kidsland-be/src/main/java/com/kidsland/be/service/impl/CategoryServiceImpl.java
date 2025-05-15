package com.kidsland.be.service.impl;

import com.kidsland.be.data.entity.Category;
import com.kidsland.be.data.repository.CategoryRepository;
import com.kidsland.be.dto.CategoryDTO;
import com.kidsland.be.dto.response.Result;
import com.kidsland.be.dto.mapper.mapstruct.CategoryMapper;
import com.kidsland.be.service.api.CategoryService;
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
    public ResponseEntity<Result> getCategories() {
        List<Category> categories = categoryRepository.findTopTenVisible();
        List<CategoryDTO> categoryDTOS = categories.stream()
                .map(categoryMapper::mapToCategoryDTO)
                .toList();
        Result result = new Result()
                .setCategories(categoryDTOS);
        return ResponseEntity.ok(result);
    }
}
