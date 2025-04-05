package com.kidsland.kidsland.service;

import com.kidsland.kidsland.data.entity.ItemEntity;
import com.kidsland.kidsland.data.entity.ObjRegistrationRequest;
import com.kidsland.kidsland.data.repository.ObjErrorRepository;
import com.kidsland.kidsland.data.repository.ObjRegistrationRequestRepository;
import com.kidsland.kidsland.data.repository.api.ItemRepository;
import com.kidsland.kidsland.dto.response.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;

import static com.kidsland.kidsland.constants.Status.CREATED;
import static com.kidsland.kidsland.constants.Status.PROCESSED;

@Slf4j
public abstract class AbstractSubcategoryService<ITEM extends ItemEntity> extends AbstractResponseService<ITEM> {

    private final ItemRepository<ITEM> itemRepository;
    private final ObjRegistrationRequestRepository objRegistrationRequestRepository;

    protected AbstractSubcategoryService(
            ObjErrorRepository objErrorRepository,
            ObjRegistrationRequestRepository objRegistrationRequestRepository,
            ItemRepository<ITEM> itemRepository) {
        super(objErrorRepository, objRegistrationRequestRepository);
        this.itemRepository = itemRepository;
        this.objRegistrationRequestRepository = objRegistrationRequestRepository;
    }

    protected ResponseEntity<Result> processOneItem(ITEM item) {
        log.info("Beginning of item registration");
        ObjRegistrationRequest registrationRequest = createRequest();
        ObjRegistrationRequest savedRequest = objRegistrationRequestRepository.saveAndFlush(registrationRequest);
        ITEM savedItem;
        try {
            log.info("Saving item to database...");
            savedItem = itemRepository.saveAndFlush(item);
        } catch (Exception e) {
            log.warn("Exception caught while saving item with id {} and name {} to database", item.getItemId(), item.getItemName());
            return createUnexpectedErrorResponse(item, savedRequest, e);
        }
        savedRequest.setItem(savedItem.getId());
        savedRequest.setProcessingStatus(PROCESSED.getCode());
        objRegistrationRequestRepository.saveAndFlush(registrationRequest);
        log.info("Item was successfully saved.");
        return constructResponse(savedItem);
    }

    protected ObjRegistrationRequest createRequest() {
        return new ObjRegistrationRequest()
                .setProcessingStatus(CREATED.getCode());
    }
}
