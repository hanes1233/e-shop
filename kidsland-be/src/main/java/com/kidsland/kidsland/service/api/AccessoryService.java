package com.kidsland.kidsland.service.api;

import com.kidsland.kidsland.data.entity.subcategories.Accessory;
import com.kidsland.kidsland.dto.AccessoryItemDTO;
import com.kidsland.kidsland.dto.response.Result;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;

public interface AccessoryService {

    ResponseEntity<Result> registerOneAccessory(AccessoryItemDTO accessoryToRegister);

    ResponseEntity<Result> getAccessories(Specification<Accessory> specification);
}
