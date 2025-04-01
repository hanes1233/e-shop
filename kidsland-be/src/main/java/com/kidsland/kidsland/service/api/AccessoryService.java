package com.kidsland.kidsland.service.api;

import com.kidsland.kidsland.data.entity.subcategories.Accessory;
import com.kidsland.kidsland.dto.ResultDTO;
import org.springframework.http.ResponseEntity;

public interface AccessoryService {

    ResponseEntity<ResultDTO> registerOneAccessory(Accessory accessoryToRegister);
}
