package com.kidsland.kidsland.rest;

import com.kidsland.kidsland.data.entity.subcategories.Accessory;
import com.kidsland.kidsland.dto.AccessoryItemDTO;
import com.kidsland.kidsland.dto.response.Result;
import com.kidsland.kidsland.service.api.AccessoryService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.kidsland.kidsland.data.repository.specification.ItemSpecification.hasUrl;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/subcategory")
public class AccessoryController {
    // TODO: inherit from Api
    private final AccessoryService accessoryService;

    @GetMapping(value = "/find/accessories/{url}", produces = {"application/json", "application/xml"})
    public ResponseEntity<Result> getItems(@PathVariable @NonNull String url) {
        Specification<Accessory> specification = hasUrl(url);
        return accessoryService.getAccessories(specification);
    }

    @PostMapping(value = "/register/accessory", produces = {"application/json", "application/xml"})
    public ResponseEntity<Result> registerItem(@RequestHeader(value = "X-Correlation-ID", required = false) String correlationId,
                                               @RequestBody AccessoryItemDTO accessory) {
        return accessoryService.registerOneAccessory(accessory);
    }

}
