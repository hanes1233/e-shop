package com.kidsland.kidsland.service.impl;

import com.kidsland.kidsland.data.entity.subcategories.Accessory;
import com.kidsland.kidsland.data.repository.ObjErrorRepository;
import com.kidsland.kidsland.data.repository.ObjRegistrationRequestRepository;
import com.kidsland.kidsland.data.repository.RelItemRepository;
import com.kidsland.kidsland.data.repository.subcategories.AccessoryRepository;
import com.kidsland.kidsland.dto.AccessoryDTO;
import com.kidsland.kidsland.dto.Item;
import com.kidsland.kidsland.dto.mapper.api.ItemMapper;
import com.kidsland.kidsland.dto.mapper.mapstruct.subcategories.AccessoryMapper;
import com.kidsland.kidsland.dto.mapper.mapstruct.subcategories.RelItemMapper;
import com.kidsland.kidsland.dto.response.Error;
import com.kidsland.kidsland.dto.response.ErrorResult;
import com.kidsland.kidsland.dto.response.Result;
import com.kidsland.kidsland.service.AbstractSubcategoryService;
import com.kidsland.kidsland.service.api.AccessoryService;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AccessoryServiceImpl
        extends AbstractSubcategoryService<Accessory, AccessoryDTO> implements AccessoryService {

    private final AccessoryRepository accessoryRepository;
    private final ItemMapper<Accessory, Item> accessoryMapper;

    public AccessoryServiceImpl
            (
                AccessoryRepository itemRepository,
                AccessoryMapper itemMapper,
                ObjRegistrationRequestRepository objRegistrationRequestRepository,
                ObjErrorRepository objErrorRepository,
                RelItemRepository relItemRepository,
                RelItemMapper relItemMapper,
                AccessoryRepository accessoryRepository,
                ItemMapper<Accessory, Item> accessoryMapper
            ) {
        super(
                objErrorRepository,
                objRegistrationRequestRepository,
                itemRepository,
                relItemRepository,
                itemMapper,
                relItemMapper);
        this.accessoryRepository = accessoryRepository;
        this.accessoryMapper = accessoryMapper;
    }

    @Override
    @Transactional
    public ResponseEntity<Result> registerOneAccessory(AccessoryDTO accessoryToRegister) {
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
