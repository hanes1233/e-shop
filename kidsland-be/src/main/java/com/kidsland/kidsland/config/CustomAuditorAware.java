package com.kidsland.kidsland.config;

import io.micrometer.common.lang.NonNullApi;
import org.springframework.data.domain.AuditorAware;

import java.util.Optional;
import java.util.UUID;

@NonNullApi
public class CustomAuditorAware implements AuditorAware<UUID> {

    @Override
    public Optional<UUID> getCurrentAuditor() {
        UUID uuid = UUID.randomUUID();
        return Optional.of(uuid);
    }
}
