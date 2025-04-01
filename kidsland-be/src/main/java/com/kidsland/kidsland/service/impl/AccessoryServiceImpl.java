package com.kidsland.kidsland.service.impl;

import com.kidsland.kidsland.data.entity.subcategories.Accessory;
import com.kidsland.kidsland.dto.AccessoryDTO;
import com.kidsland.kidsland.dto.ResultDTO;
import com.kidsland.kidsland.service.AbstractSubcategoryService;
import com.kidsland.kidsland.service.api.AccessoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccessoryServiceImpl extends AbstractSubcategoryService<AccessoryDTO> implements AccessoryService {

    @Override
    public ResponseEntity<ResultDTO> registerOneAccessory(Accessory accessoryToRegister) {
        return constructResponse(accessoryToRegister);
    }
}
