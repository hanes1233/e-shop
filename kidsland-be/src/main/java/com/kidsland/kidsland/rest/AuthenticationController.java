package com.kidsland.kidsland.rest;

import com.kidsland.kidsland.dto.LoginUserDTO;
import com.kidsland.kidsland.security.AuthenticationService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final AuthenticationManager authenticationManager;

    @SneakyThrows
    @PostMapping(value = "/validate", produces = {"application/json", "application/xml"})
    public ResponseEntity<Void> validate(@RequestBody LoginUserDTO loginUserDTO) {
        log.info("Authenticating user {}", loginUserDTO.getEmail());
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    loginUserDTO.getEmail(),
                    loginUserDTO.getPassword()));
            log.info("Authentication successful for user {}", loginUserDTO.getEmail());
            return ResponseEntity.ok().build();
        } catch (BadCredentialsException e) {
            log.warn("Authentication failed for user: {} due to bad credentials.", loginUserDTO.getEmail());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        } catch (Exception e) {
            log.warn("An error occurred while authenticating user: {}", loginUserDTO.getEmail());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @SneakyThrows
    @PostMapping(value = "/login", produces = "text/plain")
    public ResponseEntity<String> login(@RequestBody LoginUserDTO loginUserDTO) {
        log.info("Login request received for user: {}", loginUserDTO.getEmail());
        String token;
        try {
            log.info("Beginning of authentication...");
            token = authenticationService.authenticate(loginUserDTO);
            log.info("Authenticated successfully.");
        } catch (RuntimeException e) {
            log.warn("Authentication failed: Invalid credentials.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Authentication failed: Invalid credentials.");
        }
        return ResponseEntity.ok(token);
    }
}