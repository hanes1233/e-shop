package com.kidsland.kidsland.dto;

import com.kidsland.kidsland.core.dto.AbstractDTO;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailDTO extends AbstractDTO {

    private String email;

    private String subject;

    private String message;
}
