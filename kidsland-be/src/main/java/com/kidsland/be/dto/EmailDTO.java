package com.kidsland.be.dto;

import com.kidsland.be.core.dto.AbstractDTO;
import com.kidsland.be.dto.base.CommunicationDTO;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailDTO extends AbstractDTO implements CommunicationDTO {

    private String email;

    private String subject;

    private String message;

    private boolean read;
}
