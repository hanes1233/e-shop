package com.kidsland.kidsland.dto;

import com.kidsland.kidsland.core.dto.AbstractDTO;
import com.kidsland.kidsland.dto.base.CommunicationDTO;
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
