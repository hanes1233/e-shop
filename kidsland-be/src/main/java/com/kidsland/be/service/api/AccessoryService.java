package com.kidsland.be.service.api;

import com.kidsland.be.data.entity.subcategories.Accessory;
import com.kidsland.be.dto.AccessoryItemDTO;
import com.kidsland.be.dto.response.Result;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;

public interface AccessoryService {

    ResponseEntity<Result> registerOneAccessory(AccessoryItemDTO accessoryToRegister);

    ResponseEntity<Result> getAccessories(Specification<Accessory> specification);
}
