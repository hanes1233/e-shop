package com.kidsland.kidsland.service.api;

import com.kidsland.kidsland.dto.response.Result;
import org.springframework.http.ResponseEntity;

public interface CategoryService {

    ResponseEntity<Result> getCategories();
}
