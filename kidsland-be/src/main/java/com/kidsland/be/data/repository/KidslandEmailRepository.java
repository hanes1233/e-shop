package com.kidsland.be.data.repository;

import com.kidsland.be.data.entity.KidslandEmail;
import com.kidsland.be.data.repository.api.AbstractCommunicationRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KidslandEmailRepository extends AbstractCommunicationRepository<KidslandEmail> {
}
