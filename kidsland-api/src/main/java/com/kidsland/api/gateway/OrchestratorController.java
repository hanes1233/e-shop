package com.kidsland.api.gateway;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/kidsland")
public class OrchestratorController {

    @GetMapping(value = "/items", produces = {"application/json", "application/xml"})
    public List<String> items() {
        // TODO: BE part
        // TODO: S3 part
        return List.of(new String("hello"));
    }
}
