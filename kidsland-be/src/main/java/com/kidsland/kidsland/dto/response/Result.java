package com.kidsland.kidsland.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.kidsland.kidsland.data.entity.ItemEntity;
import com.kidsland.kidsland.dto.CategoryDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import javax.xml.bind.annotation.XmlAttribute;
import java.util.List;

@Getter
@Setter
@Accessors(chain = true)
public class Result {

    @XmlAttribute
    @JsonFormat
    private ErrorResult errorResult;

    @XmlAttribute
    @JsonFormat
    private String message;

    @XmlAttribute
    @JsonFormat
    private List<ItemEntity> itemEntities;

    @XmlAttribute
    @JsonFormat
    private List<CategoryDTO> categories;
}
