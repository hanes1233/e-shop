package com.kidsland.be.service.base;

import com.kidsland.be.data.entity.base.Item;
import com.kidsland.be.data.entity.KidslandRegistrationRequest;
import com.kidsland.be.data.entity.subcategories.RelItem;
import com.kidsland.be.data.repository.KidslandErrorRepository;
import com.kidsland.be.data.repository.KidslandRegistrationRequestRepository;
import com.kidsland.be.data.repository.RelItemRepository;
import com.kidsland.be.data.repository.api.AbstractItemRepository;
import com.kidsland.be.core.mapper.AbstractMapper;
import com.kidsland.be.dto.base.ItemDTO;
import com.kidsland.be.dto.mapper.mapstruct.subcategories.RelItemMapper;
import com.kidsland.be.dto.response.Result;
import com.kidsland.be.service.validation.Validator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;

import static com.kidsland.be.constants.Status.CREATED;
import static com.kidsland.be.constants.Status.PROCESSED;

@Slf4j
public abstract class AbstractSubcategoryService<
        ITEM extends Item,
        DTO extends ItemDTO> extends AbstractResponseService<DTO> {

    private final AbstractItemRepository<ITEM> abstractItemRepository;
    private final KidslandRegistrationRequestRepository kidslandRegistrationRequestRepository;
    private final RelItemRepository relItemRepository;
    private final RelItemMapper relItemMapper;
    protected final AbstractMapper<DTO, ITEM> abstractMapper;

    protected AbstractSubcategoryService
    (
            KidslandErrorRepository kidslandErrorRepository,
            KidslandRegistrationRequestRepository kidslandRegistrationRequestRepository,
            AbstractItemRepository<ITEM> abstractItemRepository,
            RelItemRepository relItemRepository,
            AbstractMapper<DTO, ITEM> abstractMapper,
            RelItemMapper relItemMapper
    ) {
        super(kidslandErrorRepository, kidslandRegistrationRequestRepository);
        this.abstractItemRepository = abstractItemRepository;
        this.kidslandRegistrationRequestRepository = kidslandRegistrationRequestRepository;
        this.relItemRepository = relItemRepository;
        this.abstractMapper = abstractMapper;
        this.relItemMapper = relItemMapper;
    }

    protected ResponseEntity<Result> processOneItem(DTO dto) {
        // Validation phase
        log.info("Validation phase started");
        Validator<DTO> validator = new Validator<>(dto);
        if (validator.isInvalid()) {
            log.warn("Validation failed.");
            return ResponseEntity.badRequest().body(new Result().setErrorResult(validator.getErrorResult()));
        }

        // Processing phase
        log.info("Beginning of item registration");
        KidslandRegistrationRequest registrationRequest = createRequest();
        ITEM item = abstractMapper.mapToEntity(dto);
        if (isItemExists(item)) {
            log.warn("Registration failed.");
            return constructDuplicateResponse(dto, registrationRequest);
        }
        ITEM savedItem;
        RelItem relItem= relItemMapper.mapToRelItem(dto.getItem());
        RelItem savedRelItem;
        try {
            log.info("Saving relItem to database...");
            savedRelItem = relItemRepository.save(relItem);
            item.setItem(savedRelItem);
            log.info("Saving item to database...");
            savedItem = abstractItemRepository.save(item);
        } catch (Exception e) {
            log.warn("Exception caught while saving item with id {} and name {} to database", item.getItemId(), item.getItemName());
            return createUnexpectedErrorResponse(dto, registrationRequest, e);
        }
        registrationRequest.setItem(savedItem.getId());
        registrationRequest.setProcessingStatus(PROCESSED.getCode());
        kidslandRegistrationRequestRepository.save(registrationRequest);
        log.info("Item was successfully saved.");
        DTO itemToReturn = abstractMapper.mapToDTO(savedItem);
        return constructResponse(itemToReturn);
    }

    protected KidslandRegistrationRequest createRequest() {
        return new KidslandRegistrationRequest()
                .setProcessingStatus(CREATED.getCode());
    }

    private boolean isItemExists(ITEM item) {
        var itemId = item.getItemId();
        if (itemId == null) {
            return false;
        }
        return abstractItemRepository.existsByItemId(itemId);
    }
}
