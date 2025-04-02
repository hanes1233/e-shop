package com.kidsland.kidsland.data.repository.subcategories;

import com.kidsland.kidsland.data.entity.subcategories.Accessory;
import com.kidsland.kidsland.data.repository.api.ItemRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccessoryRepository extends ItemRepository<Accessory> {
}
