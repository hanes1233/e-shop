package com.kidsland.be.service.impl;

import com.kidsland.be.data.entity.subcategories.Accessory;
import com.kidsland.be.data.repository.KidslandErrorRepository;
import com.kidsland.be.data.repository.KidslandRegistrationRequestRepository;
import com.kidsland.be.data.repository.RelItemRepository;
import com.kidsland.be.data.repository.subcategories.AccessoryItemRepository;
import com.kidsland.be.dto.AccessoryItemDTO;
import com.kidsland.be.dto.Item;
import com.kidsland.be.core.mapper.AbstractMapper;
import com.kidsland.be.dto.mapper.mapstruct.subcategories.AccessoryMapper;
import com.kidsland.be.dto.mapper.mapstruct.subcategories.RelItemMapper;
import com.kidsland.be.dto.response.Error;
import com.kidsland.be.dto.response.ErrorResult;
import com.kidsland.be.dto.response.Result;
import com.kidsland.be.service.base.AbstractSubcategoryService;
import com.kidsland.be.service.api.AccessoryService;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AccessoryServiceImpl
        extends AbstractSubcategoryService<Accessory, AccessoryItemDTO> implements AccessoryService {

    private final AccessoryItemRepository accessoryRepository;
    private final AbstractMapper<Accessory, Item> accessoryMapper;

    public AccessoryServiceImpl
            (
                AccessoryItemRepository itemRepository,
                AccessoryMapper itemMapper,
                KidslandRegistrationRequestRepository kidslandRegistrationRequestRepository,
                KidslandErrorRepository kidslandErrorRepository,
                RelItemRepository relItemRepository,
                RelItemMapper relItemMapper,
                AccessoryItemRepository accessoryRepository,
                AbstractMapper<Accessory, Item> accessoryMapper
            ) {
        super(
                kidslandErrorRepository,
                kidslandRegistrationRequestRepository,
                itemRepository,
                relItemRepository,
                itemMapper,
                relItemMapper);
        this.accessoryRepository = accessoryRepository;
        this.accessoryMapper = accessoryMapper;
    }

    @Override
    @Transactional
    public ResponseEntity<Result> registerOneAccessory(AccessoryItemDTO accessoryToRegister) {
        if (accessoryToRegister == null) {
            return createNullItemResponse();
        }
        return processOneItem(accessoryToRegister);
    }

    @Override
    public ResponseEntity<Result> getAccessories(Specification<Accessory> specification) {
        List<Accessory> accessories = accessoryRepository.findAll(specification);
        if (accessories.isEmpty()) {
            Error error = new Error().setErrorContent("No accessories found");
            Result result = new Result();
            result.setErrorResult(new ErrorResult().setError(List.of(error)));
            return ResponseEntity.status(404).body(result);
        }
        List<Item> items = accessories.stream()
                .map(accessoryMapper::mapToEntity)
                .toList();
        Result result = new Result().setItems(items);
        return ResponseEntity.ok(result);
    }
}
