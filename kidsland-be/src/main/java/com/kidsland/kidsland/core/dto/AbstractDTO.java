package com.kidsland.kidsland.core.dto;

import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

import java.time.OffsetDateTime;
import java.util.UUID;

@Getter
@Setter
@MappedSuperclass
public class AbstractDTO {

    protected Long id;

    protected OffsetDateTime techCreateDate;

    protected UUID techCreateIdentityId;

    protected OffsetDateTime techUpdateDate;

    protected UUID techUpdateIdentityId;
}
