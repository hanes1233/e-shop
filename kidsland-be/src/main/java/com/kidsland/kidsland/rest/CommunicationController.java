package com.kidsland.kidsland.rest;

import com.kidsland.kidsland.dto.EmailDTO;
import com.kidsland.kidsland.dto.FeedbackDTO;
import com.kidsland.kidsland.service.api.CommunicationService;
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

    private final CommunicationService communicationService;

    @PostMapping(value = "/api/feedback/register", produces = {"application/json", "application/xml"})
    public ResponseEntity<Void> registerFeedback(@RequestBody FeedbackDTO feedbackDTO) {
        log.info("Saving feedback to database...");
        communicationService.saveFeedback(feedbackDTO);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/api/email/register", produces = {"application/json", "application/xml"})
    public ResponseEntity<Void> registerEmail(@RequestBody EmailDTO emailDTO) {
        log.info("Saving email to database...");
        communicationService.saveEmail(emailDTO);
        return ResponseEntity.ok().build();
    }
}
