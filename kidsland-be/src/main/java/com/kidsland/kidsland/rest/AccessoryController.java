package com.kidsland.kidsland.rest;

import com.kidsland.kidsland.dto.AccessoryDTO;
import com.kidsland.kidsland.dto.response.Result;
import com.kidsland.kidsland.service.api.AccessoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/subcategory")
public class AccessoryController {

    private final AccessoryService accessoryService;

    @GetMapping("/find/accessory")
    public ResponseEntity<Result> getItems() {
        return accessoryService.getAllItems();
    }

    @PostMapping("/register/accessory")
    public ResponseEntity<Result> registerItem(@RequestBody AccessoryDTO accessory) {
        return accessoryService.registerOneAccessory(accessory);
    }

}
