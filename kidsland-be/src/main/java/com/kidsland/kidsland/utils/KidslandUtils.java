package com.kidsland.kidsland.utils;

import com.kidsland.kidsland.data.entity.KidslandError;
import com.kidsland.kidsland.data.entity.KidslandRegistrationRequest;
import com.kidsland.kidsland.dto.base.ItemDTO;
import com.kidsland.kidsland.dto.response.Error;
import lombok.experimental.UtilityClass;

@UtilityClass
public class KidslandUtils {

    public KidslandError createObjError(ItemDTO itemDto, KidslandRegistrationRequest registrationRequest, Exception e) {
        KidslandError kidslandError = createObjError(itemDto, registrationRequest);
        kidslandError.setErrorContent(e.getClass().getSimpleName());
        kidslandError.setStackTrace(e.getMessage());
        return kidslandError;
    }

    public KidslandError createObjError(ItemDTO itemDto, KidslandRegistrationRequest registrationRequest) {
        return new KidslandError()
                .setItemId(itemDto.getItemId())
                .setRequest(registrationRequest)
                .setItemId(itemDto.getItemId())
                .setCategoryId(itemDto.getCategoryId())
                .setSubcategoryId(itemDto.getSubcategoryId());
    }

    public com.kidsland.kidsland.dto.response.Error createError(ItemDTO itemDto, Exception e) {
        com.kidsland.kidsland.dto.response.Error error = createError(itemDto);
        error.setStackTrace(e.getMessage());
        return error;
    }

    public com.kidsland.kidsland.dto.response.Error createError(ItemDTO itemDto) {
        return new Error()
                .setItemId(itemDto.getItemId())
                .setCategoryId(itemDto.getCategoryId())
                .setSubcategoryId(itemDto.getSubcategoryId());
    }
}
