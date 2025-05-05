package com.kidsland.kidsland.data.repository;

import com.kidsland.kidsland.data.entity.KidslandFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KidslandFeedbackRepository extends JpaRepository<KidslandFeedback, Long> {
}
