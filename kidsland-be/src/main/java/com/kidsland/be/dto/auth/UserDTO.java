package com.kidsland.be.dto.auth;

import java.time.OffsetDateTime;

public record UserDTO(
        String email,
        Boolean administration,
        Boolean accessBlocked,
        Boolean readOnly,
        OffsetDateTime validTo)
{}
