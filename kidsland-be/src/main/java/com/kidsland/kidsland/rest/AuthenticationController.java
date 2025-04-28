package com.kidsland.kidsland.rest;

import com.kidsland.kidsland.dto.LoginUserDTO;
import com.kidsland.kidsland.security.AuthenticationService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @SneakyThrows
    @PostMapping(value = "/login", produces = "text/plain")
    public ResponseEntity<String> login(@RequestBody LoginUserDTO loginUserDTO) {
        String token = authenticationService.authenticate(loginUserDTO);
        if (token == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Authentication failed: Invalid credentials.");
        }
        return ResponseEntity.ok(token);
    }
}