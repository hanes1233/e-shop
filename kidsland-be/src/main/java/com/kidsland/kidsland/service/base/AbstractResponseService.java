package com.kidsland.kidsland.service.base;

import com.kidsland.kidsland.data.entity.KidslandError;
import com.kidsland.kidsland.data.entity.KidslandRegistrationRequest;
import com.kidsland.kidsland.data.repository.KidslandErrorRepository;
import com.kidsland.kidsland.data.repository.KidslandRegistrationRequestRepository;
import com.kidsland.kidsland.dto.base.ItemDTO;
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
public abstract class AbstractResponseService<DTO extends ItemDTO> {

    private final KidslandErrorRepository kidslandErrorRepository;
    private final KidslandRegistrationRequestRepository kidslandRegistrationRequestRepository;

    protected ResponseEntity<Result> constructResponse(DTO dto) {
        if (dto == null) {
            return createNullItemResponse();
        }
        Result result = new Result()
                .setMessage("Item of type " + dto.getClass().getSimpleName() + " successfully registered.")
                .setItemDtos(List.of(dto));
        return ResponseEntity.status(201).body(result);
    }

    protected ResponseEntity<Result> createNullItemResponse() {
        Result result = new Result();
        com.kidsland.kidsland.dto.response.Error error = new Error().setErrorContent("Null item cannot be registered.");
        result.setErrorResult(new ErrorResult().setError(List.of(error)));
        return ResponseEntity.badRequest().body(result);
    }

    protected ResponseEntity<Result> createUnexpectedErrorResponse(
            DTO dto,
            KidslandRegistrationRequest registrationRequest,
            Exception e) {
        if (dto == null) {
            return createNullItemResponse();
        }
        kidslandRegistrationRequestRepository.updateStatus(registrationRequest.getId(), ERROR.getCode());
        registrationRequest.setProcessingStatus(ERROR.getCode());
        Result result = new Result();
        KidslandError kidslandError = KidslandUtils.createObjError(dto, registrationRequest, e);
        kidslandErrorRepository.saveAndFlush(kidslandError);

        Error error = KidslandUtils.createError(dto, e);
        error.setErrorContent("Unexpected error");
        result.setErrorResult(new ErrorResult().setError(List.of(error)));
        return ResponseEntity.badRequest().body(result);
    }

    protected ResponseEntity<Result> constructDuplicateResponse(
            DTO dto,
            KidslandRegistrationRequest registrationRequest) {
        log.warn("Duplicate - item with provided itemId already exists");

        // Create Error DTO
        Error error = KidslandUtils.createError(dto);
        error.setErrorContent("Duplicate - item with provided itemId already exists");
        error.setStackTrace("Id: " + dto.getItemId());

        // Create and save ObjError
        log.info("Saving error...");
        KidslandError kidslandError = KidslandUtils.createObjError(dto, registrationRequest);
        kidslandErrorRepository.saveAndFlush(kidslandError);

        // Create Result DTO
        ErrorResult errorResult = new ErrorResult(List.of(error));
        Result result = new Result(errorResult);
        log.warn("Item was not registered");
        return ResponseEntity.badRequest().body(result);
    }
}
