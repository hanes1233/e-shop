package com.kidsland.kidsland.data.repository;

import com.kidsland.kidsland.data.entity.ObjError;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ObjErrorRepository extends JpaRepository<ObjError, Long> {
}
