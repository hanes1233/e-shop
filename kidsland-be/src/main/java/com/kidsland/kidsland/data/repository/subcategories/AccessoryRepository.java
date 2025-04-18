package com.kidsland.kidsland.data.repository.subcategories;

import com.kidsland.kidsland.data.entity.subcategories.Accessory;
import com.kidsland.kidsland.data.repository.api.ItemRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AccessoryRepository extends ItemRepository<Accessory> {

    @Override
    @Query("SELECT CASE WHEN COUNT(a) > 0 THEN true ELSE false END FROM Accessory a WHERE a.accessoriesId = ?1")
    boolean existsByItemId(UUID accessoriesId);
}
