package com.kidsland.kidsland.service.api;

import com.kidsland.kidsland.dto.AccessoryDTO;
import com.kidsland.kidsland.dto.response.Result;
import org.springframework.http.ResponseEntity;

public interface AccessoryService {

    ResponseEntity<Result> registerOneAccessory(AccessoryDTO accessoryToRegister);

    ResponseEntity<Result> getAllItems();
}
