package com.kidsland.be.data.repository;

import com.kidsland.be.data.entity.subcategories.RelItem;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface RelItemRepository extends JpaRepository<RelItem, Long> {
}
