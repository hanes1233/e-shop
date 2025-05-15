package com.kidsland.be.service.impl;

import com.kidsland.be.data.entity.KidslandFeedback;
import com.kidsland.be.data.repository.KidslandFeedbackRepository;
import com.kidsland.be.dto.FeedbackDTO;
import com.kidsland.be.dto.mapper.mapstruct.communication.FeedbackMapper;
import com.kidsland.be.service.api.FeedbackService;
import com.kidsland.be.service.base.AbstractCommunicationService;
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
