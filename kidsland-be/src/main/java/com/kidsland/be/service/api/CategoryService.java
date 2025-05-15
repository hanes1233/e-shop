package com.kidsland.be.service.api;

import com.kidsland.be.dto.response.Result;
import org.springframework.http.ResponseEntity;

public interface CategoryService {

    ResponseEntity<Result> getCategories();
}
