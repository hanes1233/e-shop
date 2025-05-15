package com.kidsland.be.dto;

import com.kidsland.be.core.dto.AbstractDTO;
import com.kidsland.be.dto.base.CommunicationDTO;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeedbackDTO extends AbstractDTO implements CommunicationDTO {

    private String email;

    private String message;

    private Integer star;

    private String name;
}
