package com.kidsland.kidsland.data.repository;

import com.kidsland.kidsland.data.entity.Subcategory;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface SubcategoryRepository extends JpaRepository<Subcategory, Long> {

}
