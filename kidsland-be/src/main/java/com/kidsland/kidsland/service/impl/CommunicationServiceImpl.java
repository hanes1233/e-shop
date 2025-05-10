package com.kidsland.kidsland.service.impl;

import com.kidsland.kidsland.data.entity.KidslandFeedback;
import com.kidsland.kidsland.data.repository.KidslandFeedbackRepository;
import com.kidsland.kidsland.dto.EmailDTO;
import com.kidsland.kidsland.dto.FeedbackDTO;
import com.kidsland.kidsland.dto.mapper.mapstruct.FeedbackMapper;
import com.kidsland.kidsland.service.api.CommunicationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class CommunicationServiceImpl implements CommunicationService {

    private final KidslandFeedbackRepository feedbackRepository;
    private final FeedbackMapper feedbackMapper;

    @Override
    @Transactional
    public void saveFeedback(FeedbackDTO feedbackDTO) {
        if (feedbackDTO == null) {
            log.warn("Feedback is null. Cannot be saved to database.");
        }
        KidslandFeedback feedback = feedbackMapper.mapToEntity(feedbackDTO);
        KidslandFeedback savedFeedback = feedbackRepository.save(feedback);
        log.info("Feedback was saved to database with id {}.", savedFeedback.getId());
    }

    @Override
    @Transactional
    public void saveEmail(EmailDTO emailDTO) {

    }
}
