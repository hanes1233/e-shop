package com.kidsland.kidsland.data.repository.api;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository<ITEM> extends JpaRepository<ITEM, Long> {
}
