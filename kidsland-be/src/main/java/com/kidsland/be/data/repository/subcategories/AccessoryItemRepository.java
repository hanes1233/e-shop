package com.kidsland.be.data.repository.subcategories;

import com.kidsland.be.data.entity.subcategories.Accessory;
import com.kidsland.be.data.repository.api.AbstractItemRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AccessoryItemRepository extends AbstractItemRepository<Accessory> {

    @Override
    @Query("SELECT CASE WHEN COUNT(a) > 0 THEN true ELSE false END FROM Accessory a WHERE a.accessoriesId = ?1")
    boolean existsByItemId(UUID accessoriesId);
}
