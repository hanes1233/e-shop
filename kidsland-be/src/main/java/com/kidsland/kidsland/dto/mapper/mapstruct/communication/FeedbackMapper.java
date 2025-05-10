package com.kidsland.kidsland.dto.mapper.mapstruct.communication;

import com.kidsland.kidsland.data.entity.KidslandFeedback;
import com.kidsland.kidsland.dto.FeedbackDTO;
import com.kidsland.kidsland.core.mapper.AbstractMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface FeedbackMapper extends AbstractMapper<FeedbackDTO, KidslandFeedback> {
    @Override
    FeedbackDTO mapToDTO(KidslandFeedback entity);

    @Override
    @Mapping(target = "techCreateIdentityId", ignore = true)
    @Mapping(target = "techCreateDate", ignore = true)
    @Mapping(target = "techUpdateDate", ignore = true)
    @Mapping(target = "techUpdateIdentityId", ignore = true)
    KidslandFeedback mapToEntity(FeedbackDTO dto);
}
