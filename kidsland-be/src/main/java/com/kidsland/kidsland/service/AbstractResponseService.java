package com.kidsland.kidsland.service;

import com.kidsland.kidsland.data.entity.ItemEntity;
import com.kidsland.kidsland.data.entity.ObjError;
import com.kidsland.kidsland.data.repository.ObjErrorRepository;
import com.kidsland.kidsland.dto.response.Error;
import com.kidsland.kidsland.dto.response.ErrorResult;
import com.kidsland.kidsland.dto.response.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RequiredArgsConstructor
public abstract class AbstractResponseService<ITEM extends ItemEntity> {

    private final ObjErrorRepository objErrorRepository;

    protected ResponseEntity<Result> constructResponse(ITEM item) {
        if (item == null) {
            return createNullItemResponse();
        }
        Result result = new Result()
                .setMessage("Item of type " + item.getClass().getSimpleName() + " successfully registered.")
                .setItemEntities(List.of(item));
        return ResponseEntity.status(201).body(result);
    }

    protected ResponseEntity<Result> createNullItemResponse() {
        Result result = new Result();
        com.kidsland.kidsland.dto.response.Error error = new Error().setErrorContent("Null item cannot be registered.");
        result.setErrorResult(new ErrorResult().setError(List.of(error)));
        return ResponseEntity.badRequest().body(result);
    }

    protected ResponseEntity<Result> createUnexpectedErrorResponse(ITEM item) {
        Result result = new Result();

        Error error = buildUnexpectedError(item);
    }

    private Error buildUnexpectedError(ITEM item) {
        Error error = new Error();
        Long itemId = item.getId();
        Long subcategoryId = item.getSubcategoryId();
        Long categoryId = item.getCategoryId();
        ObjError objError = new ObjError().setStackTrace("Unexpected error");
        String content;
        if (itemId == null && subcategoryId == null && categoryId == null) {
            content = "Incoming item does not contains data, necessary for registration: " +
                    "category, subcategory and item id was not provided.";

            objError.setErrorContent(content);
            objErrorRepository.save(objError);
            error.setErrorContent(content);
            return error;
        } else if (itemId == null) {
            content = "Error during saving item " + item.getClass().getSimpleName() + " with name " + item.getItemName()
                    + " and id " + item.getItemId() + " in database.";
            objError.setErrorContent(content);
            objErrorRepository.save(objError);
            error.setErrorContent(content);
            return error;
        }
        // TODO : finish block

    }

}
