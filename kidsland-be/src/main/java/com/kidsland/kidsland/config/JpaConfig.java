package com.kidsland.kidsland.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.auditing.DateTimeProvider;
import org.springframework.data.domain.AuditorAware;

import java.time.OffsetDateTime;
import java.util.Optional;
import java.util.UUID;

@Configuration
public class JpaConfig {

    @Bean
    public AuditorAware<UUID> auditorAware() {
        return new CustomAuditorAware();
    }

    @Bean(name = "auditingDateTimeProvider")
    public DateTimeProvider dateTimeProvider() {
        return () -> Optional.of(OffsetDateTime.now());
    }
}