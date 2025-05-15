package com.kidsland.be.data.repository.api;

import com.kidsland.be.core.repository.AbstractRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface AbstractCommunicationRepository<COMMUNICATION> extends AbstractRepository<COMMUNICATION> {
}
