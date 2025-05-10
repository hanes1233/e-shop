package com.kidsland.kidsland.data.repository.api;

import com.kidsland.kidsland.core.repository.AbstractRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface AbstractCommunicationRepository<COMMUNICATION> extends AbstractRepository<COMMUNICATION> {
}
