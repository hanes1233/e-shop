package com.kidsland.kidsland.core.mapper;

public interface AbstractMapper<DTO, ENTITY> {

    DTO mapToDTO(ENTITY entity);

    ENTITY mapToEntity(DTO dto);
}
