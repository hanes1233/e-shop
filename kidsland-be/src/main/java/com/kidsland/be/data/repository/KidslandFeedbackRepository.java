package com.kidsland.be.data.repository;

import com.kidsland.be.data.entity.KidslandFeedback;
import com.kidsland.be.data.repository.api.AbstractCommunicationRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KidslandFeedbackRepository extends AbstractCommunicationRepository<KidslandFeedback> {
}
