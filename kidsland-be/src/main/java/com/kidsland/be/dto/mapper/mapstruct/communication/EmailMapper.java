package com.kidsland.be.dto.mapper.mapstruct.communication;

import com.kidsland.be.core.mapper.AbstractMapper;
import com.kidsland.be.data.entity.KidslandEmail;
import com.kidsland.be.dto.EmailDTO;
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
