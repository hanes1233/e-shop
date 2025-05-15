package com.kidsland.be.config;

import com.kidsland.be.data.entity.User;
import com.kidsland.be.data.repository.UserRepository;
import io.micrometer.common.lang.NonNullApi;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.UUID;

@NonNullApi
@Component
@RequiredArgsConstructor
@Slf4j
public class CustomAuditorAware implements AuditorAware<UUID> {

    private final UserRepository userRepository;

    @Override
    public Optional<UUID> getCurrentAuditor() {
        log.info("Getting current auditor phase");
        // Get the current Authentication object from Spring Security
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.isAuthenticated()) {
            log.info("Authentication detected : retrieving user");
            String email = authentication.getName();

            // Retrieve the authenticated user from the database
            log.info("Looking for user in database...");
            Optional<User> user = userRepository.findByEmail(email);

            if (user.isPresent()) {
                log.info("Success. User is found");
                // Return the UUID (or identityId) of the user
                return Optional.of(user.get().getIdentityId());
            }
        }
        log.info("User was not found, generating random UUID");
        return Optional.of(UUID.randomUUID());
    }
}
