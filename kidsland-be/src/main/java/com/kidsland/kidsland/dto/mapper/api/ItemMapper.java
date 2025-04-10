package com.kidsland.kidsland.dto.mapper.api;

public interface ItemMapper<DTO, ENTITY> {

    DTO mapToDTO(ENTITY entity);

    ENTITY mapToEntity(DTO dto);
}
