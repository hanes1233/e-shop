package com.kidsland.kidsland.rest;

import com.kidsland.kidsland.dto.LoginUserDTO;
import com.kidsland.kidsland.security.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        LoginUserDTO loginUserDTO = new LoginUserDTO()
                .setEmail(username)
                .setPassword(password);
        String token = authenticationService.authenticate(loginUserDTO);
        return ResponseEntity.ok(token);
    }
}