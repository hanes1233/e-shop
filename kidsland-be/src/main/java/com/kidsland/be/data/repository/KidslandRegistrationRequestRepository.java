package com.kidsland.be.data.repository;

import com.kidsland.be.data.entity.KidslandRegistrationRequest;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface KidslandRegistrationRequestRepository extends JpaRepository<KidslandRegistrationRequest, Long> {

    @Query("UPDATE KidslandRegistrationRequest orr SET orr.processingStatus = :status WHERE orr.id = :id")
    @Modifying
    void updateStatus(@Param("id") Long id, @Param("status") int status);
}
