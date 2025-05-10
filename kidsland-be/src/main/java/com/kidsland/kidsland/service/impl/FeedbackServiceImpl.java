package com.kidsland.kidsland.service.impl;

import com.kidsland.kidsland.data.entity.KidslandFeedback;
import com.kidsland.kidsland.data.repository.KidslandFeedbackRepository;
import com.kidsland.kidsland.dto.FeedbackDTO;
import com.kidsland.kidsland.dto.mapper.mapstruct.communication.FeedbackMapper;
import com.kidsland.kidsland.service.api.FeedbackService;
import com.kidsland.kidsland.service.base.AbstractCommunicationService;
import org.springframework.stereotype.Service;

@Service
public class FeedbackServiceImpl
        extends AbstractCommunicationService<KidslandFeedback, FeedbackDTO> implements FeedbackService {

    public FeedbackServiceImpl(
                    KidslandFeedbackRepository kidslandFeedbackRepository,
                    FeedbackMapper feedbackMapper
            )
    {
        super(kidslandFeedbackRepository, feedbackMapper);
    }
}
