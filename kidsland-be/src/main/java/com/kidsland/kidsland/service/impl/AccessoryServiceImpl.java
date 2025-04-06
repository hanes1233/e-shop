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
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AccessoryServiceImpl extends AbstractSubcategoryService<Accessory, AccessoryDTO> implements AccessoryService {

    public AccessoryServiceImpl
            (
                AccessoryRepository itemRepository,
                AccessoryMapper accessoryMapper,
                ObjRegistrationRequestRepository objRegistrationRequestRepository,
                ObjErrorRepository objErrorRepository,
                RelItemRepository relItemRepository,
                RelItemMapper relItemMapper
            ) {
        super(
                objErrorRepository,
                objRegistrationRequestRepository,
                itemRepository,
                relItemRepository,
                accessoryMapper,
                relItemMapper);
    }

    @Override
    @Transactional
    public ResponseEntity<Result> registerOneAccessory(AccessoryDTO accessoryToRegister) {
        if (accessoryToRegister == null) {
            return createNullItemResponse();
        }
        return processOneItem(accessoryToRegister);
    }
}
