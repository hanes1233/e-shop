package com.kidsland.kidsland.rest;

import com.kidsland.kidsland.dto.ResultDTO;
import com.kidsland.kidsland.service.api.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping(value = "api/v1/categories", produces = {"application/json", "application/xml"})
    public ResponseEntity<ResultDTO> getCategories() {
        return categoryService.getCategories();
    }
}
