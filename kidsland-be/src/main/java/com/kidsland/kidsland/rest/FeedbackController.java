package com.kidsland.kidsland.rest;

import com.kidsland.kidsland.dto.FeedbackDTO;
import com.kidsland.kidsland.service.api.FeedbackService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
public class FeedbackController {

    private final FeedbackService feedbackService;

    @PostMapping(value = "/api/feedback/register", produces = {"application/json", "application/xml"})
    public ResponseEntity<Void> registerFeedback(@RequestBody FeedbackDTO feedbackDTO) {
        log.info("Saving feedback to database...");
        feedbackService.saveFeedback(feedbackDTO);
        return ResponseEntity.ok().build();
    }
    // Test CI/CD pipeline trigger
}
