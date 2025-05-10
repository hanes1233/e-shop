package com.kidsland.kidsland.service.validation;

import com.kidsland.kidsland.dto.RelItemDTO;
import com.kidsland.kidsland.dto.base.ItemDTO;
import com.kidsland.kidsland.dto.response.Error;
import com.kidsland.kidsland.dto.response.ErrorResult;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Getter
@Setter
public class Validator<DTO extends ItemDTO> {

    private boolean isInvalid;

    private ErrorResult errorResult;

    public Validator(DTO dto) {
        validate(dto);
    }

    private void validate(DTO dto) {
        log.info("Validating dto...");
        List<Error> errorList = new ArrayList<>();
        if (shouldValidate(dto, errorList)) {
            var item = dto.getItem();
            validateCategory(dto, errorList, item);
            validateSubcategory(dto, errorList, item);
        }
        if (!errorList.isEmpty()) {
            log.info("Validation errors: {}", errorList);
        }
    }

    private boolean shouldValidate(DTO dto, List<Error> errorList) {
        var item = dto.getItem();
        if (item == null) {
            Error error= new Error()
                    .setItemId(dto.getItemId())
                    .setErrorContent("Item is not exists");
            errorList.add(error);
            isInvalid = true;
            return false;
        }
        return true;
    }

    private void validateCategory(DTO dto, List<Error> errorList, RelItemDTO item) {
        var category = item.getCategory();
        if (category == null) {
            Error error= new Error()
                    .setItemId(item.getItemId())
                    .setSubcategoryId(item.getSubcategory() == null ? null : item.getSubcategory().getId())
                    .setItemId(dto.getItemId())
                    .setErrorContent("Category is not exists");
            errorList.add(error);
            isInvalid = true;
        }
    }

    private void validateSubcategory(DTO dto, List<Error> errorList, RelItemDTO item) {
        var subcategory = item.getSubcategory();
        if (subcategory == null) {
            Error error= new Error()
                    .setItemId(item.getItemId())
                    .setCategoryId(item.getCategory() == null ? null : item.getCategory().getId())
                    .setItemId(dto.getItemId())
                    .setErrorContent("Subcategory is not exists");
            errorList.add(error);
            isInvalid = true;
        }
    }
}
