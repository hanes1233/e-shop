package com.kidsland.kidsland.data.repository;

import com.kidsland.kidsland.data.entity.Category;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query("SELECT c FROM Category c LEFT JOIN FETCH c.subcategories WHERE c.hidden = false ORDER BY c.id DESC")
    List<Category> findTopTenVisible();
}
