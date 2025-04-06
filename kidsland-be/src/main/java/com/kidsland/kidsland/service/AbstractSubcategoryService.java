package com.kidsland.kidsland.service;

import com.kidsland.kidsland.data.entity.ItemEntity;
import com.kidsland.kidsland.data.entity.ObjRegistrationRequest;
import com.kidsland.kidsland.data.entity.subcategories.RelItem;
import com.kidsland.kidsland.data.repository.ObjErrorRepository;
import com.kidsland.kidsland.data.repository.ObjRegistrationRequestRepository;
import com.kidsland.kidsland.data.repository.RelItemRepository;
import com.kidsland.kidsland.data.repository.api.ItemRepository;
import com.kidsland.kidsland.dto.mapper.ItemMapper;
import com.kidsland.kidsland.dto.mapper.subcategories.RelItemMapper;
import com.kidsland.kidsland.dto.response.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;

import static com.kidsland.kidsland.constants.Status.CREATED;
import static com.kidsland.kidsland.constants.Status.PROCESSED;

@Slf4j
public abstract class AbstractSubcategoryService<ITEM extends ItemEntity, DTO extends com.kidsland.kidsland.dto.DTO> extends AbstractResponseService<ITEM> {

    private final ItemRepository<ITEM> itemRepository;
    private final ObjRegistrationRequestRepository objRegistrationRequestRepository;
    private final RelItemRepository relItemRepository;
    private final RelItemMapper relItemMapper;
    protected final ItemMapper<DTO, ITEM> itemMapper;

    protected AbstractSubcategoryService
    (
            ObjErrorRepository objErrorRepository,
            ObjRegistrationRequestRepository objRegistrationRequestRepository,
            ItemRepository<ITEM> itemRepository,
            RelItemRepository relItemRepository,
            ItemMapper<DTO, ITEM> itemMapper,
            RelItemMapper relItemMapper
    ) {
        super(objErrorRepository, objRegistrationRequestRepository);
        this.itemRepository = itemRepository;
        this.objRegistrationRequestRepository = objRegistrationRequestRepository;
        this.relItemRepository = relItemRepository;
        this.itemMapper = itemMapper;
        this.relItemMapper = relItemMapper;
    }

    protected ResponseEntity<Result> processOneItem(DTO dto) {
        log.info("Beginning of item registration");
        ObjRegistrationRequest registrationRequest = createRequest();
        ITEM item = itemMapper.mapToEntity(dto);
        ITEM savedItem;
        RelItem relItem= relItemMapper.mapToRelItem(dto.getItem());
        RelItem savedRelItem;
        try {
            log.info("Saving relItem to database...");
            savedRelItem = relItemRepository.save(relItem);
            item.setItem(savedRelItem);
            log.info("Saving item to database...");
            savedItem = itemRepository.save(item);
        } catch (Exception e) {
            log.warn("Exception caught while saving item with id {} and name {} to database", item.getItemId(), item.getItemName());
            return createUnexpectedErrorResponse(item, registrationRequest, e);
        }
        registrationRequest.setItem(savedItem.getId());
        registrationRequest.setProcessingStatus(PROCESSED.getCode());
        objRegistrationRequestRepository.save(registrationRequest);
        log.info("Item was successfully saved.");
        return constructResponse(savedItem);
    }

    protected ObjRegistrationRequest createRequest() {
        return new ObjRegistrationRequest()
                .setProcessingStatus(CREATED.getCode());
    }
}
