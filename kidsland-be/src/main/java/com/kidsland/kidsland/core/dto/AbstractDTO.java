package com.kidsland.kidsland.core.dto;

import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@MappedSuperclass
public class AbstractDTO {

    protected Long id;

    protected LocalDateTime techCreateDate;

    protected UUID techCreateIdentityId;

    protected LocalDateTime techUpdateDate;

    protected UUID techUpdateIdentityId;
}
