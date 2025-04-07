package com.kidsland.kidsland.service;

import com.kidsland.kidsland.data.entity.ItemEntity;
import com.kidsland.kidsland.data.entity.ObjError;
import com.kidsland.kidsland.data.entity.ObjRegistrationRequest;
import com.kidsland.kidsland.data.repository.ObjErrorRepository;
import com.kidsland.kidsland.data.repository.ObjRegistrationRequestRepository;
import com.kidsland.kidsland.dto.response.Error;
import com.kidsland.kidsland.dto.response.ErrorResult;
import com.kidsland.kidsland.dto.response.Result;
import com.kidsland.kidsland.utils.KidslandUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static com.kidsland.kidsland.constants.Status.ERROR;

@RequiredArgsConstructor
@Slf4j
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
        ObjError objError = KidslandUtils.createObjError(item, registrationRequest, e);
        objErrorRepository.saveAndFlush(objError);

        Error error = KidslandUtils.createError(item, e);
        error.setErrorContent("Unexpected error");
        result.setErrorResult(new ErrorResult().setError(List.of(error)));
        return ResponseEntity.badRequest().body(result);
    }

    protected ResponseEntity<Result> constructDuplicateResponse(
            ITEM item,
            ObjRegistrationRequest registrationRequest) {
        log.warn("Duplicate - item with provided itemId already exists");

        // Create Error DTO
        Error error = KidslandUtils.createError(item);
        error.setErrorContent("Duplicate - item with provided itemId already exists");
        error.setStackTrace("Id: " + item.getItemId());

        // Create and save ObjError
        log.info("Saving error...");
        ObjError objError = KidslandUtils.createObjError(item, registrationRequest);
        objErrorRepository.saveAndFlush(objError);

        // Create Result DTO
        ErrorResult errorResult = new ErrorResult(List.of(error));
        Result result = new Result(errorResult);
        log.warn("Item was not registered");
        return ResponseEntity.badRequest().body(result);
    }
}
