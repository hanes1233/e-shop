package com.kidsland.kidsland.dto;

import com.kidsland.kidsland.core.dto.AbstractDTO;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeedbackDTO extends AbstractDTO {

    private String email;

    private String message;

    private Integer star;

    private String name;
}
