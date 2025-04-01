package com.kidsland.kidsland.service;

import com.kidsland.kidsland.data.entity.ItemEntity;
import com.kidsland.kidsland.dto.ResultDTO;
import org.springframework.http.ResponseEntity;

public abstract class AbstractSubcategoryService<ITEM extends ItemEntity> {

    public ResponseEntity<ResultDTO> constructResponse(ITEM item) {
        return ResponseEntity.ok(null);
    }
}
