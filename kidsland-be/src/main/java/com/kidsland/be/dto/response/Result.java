package com.kidsland.be.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.kidsland.be.dto.AccessoryItemDTO;
import com.kidsland.be.dto.CategoryDTO;
import com.kidsland.be.dto.EmailDTO;
import com.kidsland.be.dto.base.ItemDTO;
import com.kidsland.be.dto.Item;
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
    private List<AccessoryItemDTO> accessoryDTOS;

    @XmlAttribute
    @JsonFormat
    private List<Item> items;

    @XmlAttribute
    @JsonFormat
    private List<CategoryDTO> categories;

    @XmlAttribute
    @JsonFormat
    private List<ItemDTO> itemDtos;

    @XmlAttribute
    @JsonFormat
    private List<EmailDTO> emails;

    public Result(ErrorResult errorResult) {
        this.errorResult = errorResult;
    }
}
