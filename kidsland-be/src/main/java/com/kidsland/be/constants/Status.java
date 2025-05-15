package com.kidsland.be.constants;

import lombok.Getter;

@Getter
public enum Status {
    CREATED (1),
    ERROR (2),
    PROCESSED (3);

    private final int code;

    Status(int code) {
        this.code = code;
    }
}
