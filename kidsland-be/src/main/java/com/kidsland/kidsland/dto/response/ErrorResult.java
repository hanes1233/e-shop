package com.kidsland.kidsland.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
@NoArgsConstructor
public class ErrorResult {

    private List<Error> error;

    public ErrorResult(List<Error> error) {
        this.error = error;
    }
}
