package com.kidsland.kidsland.rest;

import com.kidsland.kidsland.dto.EmailDTO;
import com.kidsland.kidsland.dto.FeedbackDTO;
import com.kidsland.kidsland.service.api.EmailService;
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
public class CommunicationController {

    private final FeedbackService feedbackService;
    private final EmailService emailService;

    @PostMapping(value = "/api/communication/feedback/register", produces = {"application/json", "application/xml"})
    public ResponseEntity<Void> registerFeedback(@RequestBody FeedbackDTO feedbackDTO) {
        log.info("Saving feedback to database...");
        feedbackService.saveCommunication(feedbackDTO);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/api/communication/email/register", produces = {"application/json", "application/xml"})
    public ResponseEntity<Void> registerEmail(@RequestBody EmailDTO emailDTO) {
        log.info("Saving email to database...");
        emailService.saveCommunication(emailDTO);
        return ResponseEntity.ok().build();
    }

    // TODO: test CI/CD pipeline
}
