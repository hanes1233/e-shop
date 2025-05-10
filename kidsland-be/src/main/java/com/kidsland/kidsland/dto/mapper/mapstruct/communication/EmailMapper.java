package com.kidsland.kidsland.dto.mapper.mapstruct.communication;

import com.kidsland.kidsland.core.mapper.AbstractMapper;
import com.kidsland.kidsland.data.entity.KidslandEmail;
import com.kidsland.kidsland.dto.EmailDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface EmailMapper extends AbstractMapper<EmailDTO, KidslandEmail> {

    @Override
    EmailDTO mapToDTO(KidslandEmail entity);

    @Override
    @Mapping(target = "techCreateIdentityId", ignore = true)
    @Mapping(target = "techCreateDate", ignore = true)
    @Mapping(target = "techUpdateDate", ignore = true)
    @Mapping(target = "techUpdateIdentityId", ignore = true)
    KidslandEmail mapToEntity(EmailDTO dto);
}
