package com.kidsland.kidsland.data.repository;

import com.kidsland.kidsland.data.entity.KidslandEmail;
import com.kidsland.kidsland.data.repository.api.AbstractCommunicationRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KidslandEmailRepository extends AbstractCommunicationRepository<KidslandEmail> {
}
