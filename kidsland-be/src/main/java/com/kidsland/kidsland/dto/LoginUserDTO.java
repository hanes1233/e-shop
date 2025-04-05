package com.kidsland.kidsland.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
public class LoginUserDTO {

    private String email;
    
    private String password;
}