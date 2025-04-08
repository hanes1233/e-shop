package com.kidsland.kidsland.service.impl;

import com.kidsland.kidsland.data.entity.subcategories.Accessory;
import com.kidsland.kidsland.data.repository.ObjErrorRepository;
import com.kidsland.kidsland.data.repository.ObjRegistrationRequestRepository;
import com.kidsland.kidsland.data.repository.RelItemRepository;
import com.kidsland.kidsland.data.repository.subcategories.AccessoryRepository;
import com.kidsland.kidsland.dto.AccessoryDTO;
import com.kidsland.kidsland.dto.mapper.subcategories.AccessoryMapper;
import com.kidsland.kidsland.dto.mapper.subcategories.RelItemMapper;
import com.kidsland.kidsland.dto.response.Result;
import com.kidsland.kidsland.service.AbstractSubcategoryService;
import com.kidsland.kidsland.service.api.AccessoryService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AccessoryServiceImpl extends AbstractSubcategoryService<Accessory, AccessoryDTO> implements AccessoryService {

    private final AccessoryRepository accessoryRepository;
    private final AccessoryMapper accessoryMapper;

    public AccessoryServiceImpl
            (
                AccessoryRepository itemRepository,
                AccessoryMapper accessoryMapper,
                ObjRegistrationRequestRepository objRegistrationRequestRepository,
                ObjErrorRepository objErrorRepository,
                RelItemRepository relItemRepository,
                RelItemMapper relItemMapper,
                AccessoryRepository accessoryRepository
            ) {
        super(
                objErrorRepository,
                objRegistrationRequestRepository,
                itemRepository,
                relItemRepository,
                accessoryMapper,
                relItemMapper);
        this.accessoryMapper = accessoryMapper;
        this.accessoryRepository = accessoryRepository;
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
    @Transactional
    public ResponseEntity<Result> getAllItems() {
        Pageable pageable = PageRequest.of(0, 100);
        Page<Accessory> page = accessoryRepository.findAll(pageable);
        List<Accessory> accessories = page.getContent();
        if (accessories.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            List<AccessoryDTO> accessoryDTOs = accessories.stream()
                    .map(accessoryMapper::mapToDTO)
                    .toList();
            return ResponseEntity.ok(new Result().setAccessoryDTOS(accessoryDTOs));
        }
    }
}
