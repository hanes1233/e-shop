package com.kidsland.kidsland.service;

import com.kidsland.kidsland.data.entity.ItemEntity;
import com.kidsland.kidsland.data.repository.api.ItemRepository;
import com.kidsland.kidsland.dto.response.Error;
import com.kidsland.kidsland.dto.response.ErrorResult;
import com.kidsland.kidsland.dto.response.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RequiredArgsConstructor
public abstract class AbstractSubcategoryService<ITEM extends ItemEntity> {

    private final ItemRepository<ITEM> itemRepository;

    protected ResponseEntity<Result> processOneItem(ITEM item) {
        ITEM savedItem = itemRepository.saveAndFlush(item);
        return constructResponse(savedItem);
    }

    // TODO: should be moved to new util class?
   protected ResponseEntity<Result> constructResponse(ITEM item) {
        Result result = new Result();
        if (item == null) {
            return ResponseEntity.badRequest().body(result);
        }
        return ResponseEntity.ok(null);
    }


    // TODO: should be moved to new util class?
    protected ResponseEntity<Result> createNullItemResponse() {
        Result result = new Result();
        com.kidsland.kidsland.dto.response.Error error = new Error().setErrorContent("Null item cannot be registered.");
        result.setErrorResult(new ErrorResult().setError(List.of(error)));
        return ResponseEntity.badRequest().body(result);
    }
}
