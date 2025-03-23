package com.kidsland.kidsland.service.api;

import com.kidsland.kidsland.dto.ResultDTO;
import org.springframework.http.ResponseEntity;

public interface CategoryService {

    ResponseEntity<ResultDTO> getCategories();
}
