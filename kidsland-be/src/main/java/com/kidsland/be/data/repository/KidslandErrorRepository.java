package com.kidsland.be.data.repository;

import com.kidsland.be.data.entity.KidslandError;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KidslandErrorRepository extends JpaRepository<KidslandError, Long> {
}
