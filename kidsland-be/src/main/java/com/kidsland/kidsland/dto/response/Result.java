package com.kidsland.kidsland.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.kidsland.kidsland.dto.AccessoryDTO;
import com.kidsland.kidsland.dto.CategoryDTO;
import com.kidsland.kidsland.dto.DTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.xml.bind.annotation.XmlAttribute;
import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@NoArgsConstructor
public class Result {

    @XmlAttribute
    @JsonFormat
    private ErrorResult errorResult;

    @XmlAttribute
    @JsonFormat
    private String message;

    @XmlAttribute
    @JsonFormat
    private List<AccessoryDTO> accessoryDTOS;

    @XmlAttribute
    @JsonFormat
    private List<DTO> dtos;

    @XmlAttribute
    @JsonFormat
    private List<CategoryDTO> categories;

    public Result(ErrorResult errorResult) {
        this.errorResult = errorResult;
    }
}
