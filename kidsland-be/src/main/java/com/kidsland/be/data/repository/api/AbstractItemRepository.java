package com.kidsland.be.data.repository.api;

import com.kidsland.be.core.repository.AbstractRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface AbstractItemRepository<ITEM> extends AbstractRepository<ITEM> {

    boolean existsByItemId(java.util.UUID itemId);
}
