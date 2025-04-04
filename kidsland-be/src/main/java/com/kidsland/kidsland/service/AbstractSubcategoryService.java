package com.kidsland.kidsland.service;

import com.kidsland.kidsland.data.entity.ItemEntity;
import com.kidsland.kidsland.data.entity.ObjRegistrationRequest;
import com.kidsland.kidsland.data.repository.api.ItemRepository;
import com.kidsland.kidsland.dto.response.Result;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;

@RequiredArgsConstructor
public abstract class AbstractSubcategoryService<ITEM extends ItemEntity> extends AbstractResponseService<ITEM> {

    private final ItemRepository<ITEM> itemRepository;

    protected ResponseEntity<Result> processOneItem(ITEM item) {
        try {
            ITEM savedItem = itemRepository.saveAndFlush(item);
        } catch (Exception e) {

        }

        ObjRegistrationRequest request = createRequest(savedItem);
        return constructResponse(savedItem);
    }

    protected ObjRegistrationRequest createRequest(ITEM savedItem) {
        return new ObjRegistrationRequest()
                .setItem(savedItem.getId());
    }
}
