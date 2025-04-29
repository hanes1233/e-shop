package com.kidsland.kidsland.security;

import com.kidsland.kidsland.data.entity.User;
import com.kidsland.kidsland.data.repository.UserRepository;
import com.kidsland.kidsland.dto.LoginUserDTO;
import com.kidsland.kidsland.dto.RegisterUserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public User signup(RegisterUserDTO userToRegister) {
        var validFrom = userToRegister.getValidFrom();
        var validTo = userToRegister.getValidTo();
        var updateDate = userToRegister.getTechUpdateDate();

        User user = new User()
                .setEmail(userToRegister.getEmail())
                .setPassword(passwordEncoder.encode(userToRegister.getPassword()))
                .setAdministrator(userToRegister.getAdministrator())
                .setIdentityId(userToRegister.getIdentityId())
                .setAccessBlocked(userToRegister.getAccessBlocked())
                .setReadOnly(userToRegister.getReadOnly())
                .setValidFrom(validFrom)
                .setValidTo(validTo)
                .setTechCreateIdentityId(userToRegister.getTechCreateIdentityId())
                .setTechUpdateDate(updateDate);

        return userRepository.save(user);
    }

    public String authenticate(LoginUserDTO input) {
        // Authenticate the user
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        input.getEmail(),
                        input.getPassword()
                )
        );

        // Find the user from the database (assuming the username is the email)
        UserDetails user = userRepository.findByEmail(input.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Generate and return the JWT token for the authenticated user
        return jwtService.generateToken(user);
    }
}