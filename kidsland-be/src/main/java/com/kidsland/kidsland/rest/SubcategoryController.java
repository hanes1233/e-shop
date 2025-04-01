package com.kidsland.kidsland.rest;

import com.kidsland.kidsland.data.entity.subcategories.Accessory;
import com.kidsland.kidsland.dto.ResultDTO;
import com.kidsland.kidsland.service.api.AccessoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/subcategory/items/register")
public class SubcategoryController {

    private final AccessoryService accessoryService;

    @PostMapping("/accessory")
    public ResponseEntity<ResultDTO> registerItem(@RequestBody Accessory accessory) {
        return accessoryService.registerOneAccessory(accessory);
    }
}
