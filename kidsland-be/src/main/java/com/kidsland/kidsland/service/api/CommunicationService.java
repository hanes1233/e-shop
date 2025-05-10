package com.kidsland.kidsland.service.api;

import com.kidsland.kidsland.dto.EmailDTO;
import com.kidsland.kidsland.dto.FeedbackDTO;

public interface CommunicationService {

    void saveFeedback(FeedbackDTO feedbackDTO);

    void saveEmail(EmailDTO emailDTO);
}
