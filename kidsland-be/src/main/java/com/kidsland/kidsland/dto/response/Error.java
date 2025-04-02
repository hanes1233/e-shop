package com.kidsland.kidsland.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.xml.bind.annotation.XmlAttribute;
import java.util.UUID;

@Accessors(chain = true)
@Getter
@Setter
public class Error {

    @XmlAttribute
    @JsonFormat
    private Long id;

    @XmlAttribute
    @JsonFormat
    private String errorContent;

    @XmlAttribute
    @JsonFormat
    private String stackTrace;

    @XmlAttribute
    @JsonFormat
    private UUID itemId;

    @XmlAttribute
    @JsonFormat
    private Long categoryId;

    @XmlAttribute
    @JsonFormat
    private Long subcategoryId;
}
