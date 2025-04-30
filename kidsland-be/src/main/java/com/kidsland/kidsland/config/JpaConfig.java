package com.kidsland.kidsland.config;

import com.kidsland.kidsland.data.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.auditing.DateTimeProvider;
import org.springframework.data.domain.AuditorAware;

import java.time.OffsetDateTime;
import java.util.Optional;
import java.util.UUID;

@Configuration
@RequiredArgsConstructor
public class JpaConfig {

    private final UserRepository userRepository;

    @Bean
    public AuditorAware<UUID> auditorAware() {
        return new CustomAuditorAware(userRepository);
    }

    @Bean(name = "auditingDateTimeProvider")
    public DateTimeProvider dateTimeProvider() {
        return () -> Optional.of(OffsetDateTime.now());
    }
}