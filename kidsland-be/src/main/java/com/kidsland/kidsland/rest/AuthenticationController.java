package com.kidsland.kidsland.rest;

import com.kidsland.kidsland.dto.LoginUserDTO;
import com.kidsland.kidsland.security.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(value = "/login", produces = "text/plain")
    public ResponseEntity<String> login(@RequestBody LoginUserDTO loginUserDTO) {
        System.out.println("email : " + loginUserDTO.getEmail());
        System.out.println("password : " + loginUserDTO.getPassword());
        String token = authenticationService.authenticate(loginUserDTO);
        System.out.println("token is " + token);
        return ResponseEntity.ok(token);
    }
}