package com.kidsland.kidsland.service;

import com.kidsland.kidsland.data.entity.ItemEntity;
import com.kidsland.kidsland.data.entity.ObjError;
import com.kidsland.kidsland.data.entity.ObjRegistrationRequest;
import com.kidsland.kidsland.data.repository.ObjErrorRepository;
import com.kidsland.kidsland.data.repository.ObjRegistrationRequestRepository;
import com.kidsland.kidsland.dto.response.Error;
import com.kidsland.kidsland.dto.response.ErrorResult;
import com.kidsland.kidsland.dto.response.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static com.kidsland.kidsland.constants.Status.ERROR;

@RequiredArgsConstructor
public abstract class AbstractResponseService<ITEM extends ItemEntity> {

    private final ObjErrorRepository objErrorRepository;
    private final ObjRegistrationRequestRepository objRegistrationRequestRepository;

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

    protected ResponseEntity<Result> createUnexpectedErrorResponse(
            ITEM item,
            ObjRegistrationRequest registrationRequest,
            Exception e) {
        if (item == null) {
            return createNullItemResponse();
        }
        objRegistrationRequestRepository.updateStatus(registrationRequest.getId(), ERROR.getCode());
        registrationRequest.setProcessingStatus(ERROR.getCode());
        Result result = new Result();
        ObjError objError = createObjError(item, registrationRequest, e);
        objErrorRepository.saveAndFlush(objError);

        Error error = createError(item, e);
        error.setErrorContent("Unexpected error");
        result.setErrorResult(new ErrorResult().setError(List.of(error)));
        return ResponseEntity.badRequest().body(result);
    }

    private ObjError createObjError(ITEM item, ObjRegistrationRequest registrationRequest, Exception e) {
        return new ObjError()
                .setItemId(item.getItemId())
                .setRequest(registrationRequest)
                .setItemId(item.getItemId())
                .setCategoryId(item.getCategoryId())
                .setSubcategoryId(item.getSubcategoryId())
                .setErrorContent(e.getClass().getSimpleName())
                .setStackTrace(e.getMessage());
    }

    private Error createError(ITEM item, Exception e) {
        return new Error()
                .setCategoryId(item.getCategoryId())
                .setSubcategoryId(item.getSubcategoryId())
                .setStackTrace(e.getMessage());
    }

}
