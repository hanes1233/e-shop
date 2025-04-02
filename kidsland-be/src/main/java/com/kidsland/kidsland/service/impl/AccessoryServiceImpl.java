package com.kidsland.kidsland.service.impl;

import com.kidsland.kidsland.data.entity.subcategories.Accessory;
import com.kidsland.kidsland.data.repository.subcategories.AccessoryRepository;
import com.kidsland.kidsland.dto.AccessoryDTO;
import com.kidsland.kidsland.dto.mapper.CategoryMapper;
import com.kidsland.kidsland.dto.response.Result;
import com.kidsland.kidsland.service.AbstractSubcategoryService;
import com.kidsland.kidsland.service.api.AccessoryService;
import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AccessoryServiceImpl extends AbstractSubcategoryService<Accessory> implements AccessoryService {

    private final CategoryMapper categoryMapper;

    public AccessoryServiceImpl
            (
                AccessoryRepository itemRepository,
                CategoryMapper categoryMapper
            ) {
        super(itemRepository);
        this.categoryMapper = categoryMapper;
    }

    @Override
    @Transactional
    public ResponseEntity<Result> registerOneAccessory(AccessoryDTO accessoryToRegister) {
        if (accessoryToRegister == null) {
            return createNullItemResponse();
        }
        Accessory accessory = categoryMapper.mapToAccessory(accessoryToRegister);
        return processOneItem(accessory);
    }
}
