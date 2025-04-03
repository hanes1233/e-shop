package com.kidsland.kidsland.data.repository.api;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface ItemRepository<ITEM> extends JpaRepository<ITEM, Long> {
}
