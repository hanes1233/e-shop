package com.kidsland.be.dto.auth;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;
import org.springframework.data.annotation.CreatedDate;

import java.time.OffsetDateTime;
import java.util.UUID;

@Getter
@Setter
public class RegisterUserDTO {

    private String email;

    private String password;

    @UuidGenerator
    private UUID identityId;

    private Boolean administrator = false;

    private Boolean accessBlocked = false;

    private Boolean readOnly = false;

    private OffsetDateTime validFrom;

    private OffsetDateTime validTo;

    @CreatedDate
    private OffsetDateTime techCreateDate;

    @UuidGenerator
    private UUID techCreateIdentityId;

    private OffsetDateTime techUpdateDate;

    @UuidGenerator
    private UUID techUpdateIdentityId;
}