package com.kidsland.kidsland.utils;

import com.kidsland.kidsland.data.entity.KidslandError;
import com.kidsland.kidsland.data.entity.KidslandRegistrationRequest;
import com.kidsland.kidsland.dto.base.DTO;
import com.kidsland.kidsland.dto.response.Error;
import lombok.experimental.UtilityClass;

@UtilityClass
public class KidslandUtils {

    public KidslandError createObjError(DTO dto, KidslandRegistrationRequest registrationRequest, Exception e) {
        KidslandError kidslandError = createObjError(dto, registrationRequest);
        kidslandError.setErrorContent(e.getClass().getSimpleName());
        kidslandError.setStackTrace(e.getMessage());
        return kidslandError;
    }

    public KidslandError createObjError(DTO dto, KidslandRegistrationRequest registrationRequest) {
        return new KidslandError()
                .setItemId(dto.getItemId())
                .setRequest(registrationRequest)
                .setItemId(dto.getItemId())
                .setCategoryId(dto.getCategoryId())
                .setSubcategoryId(dto.getSubcategoryId());
    }

    public com.kidsland.kidsland.dto.response.Error createError(DTO dto, Exception e) {
        com.kidsland.kidsland.dto.response.Error error = createError(dto);
        error.setStackTrace(e.getMessage());
        return error;
    }

    public com.kidsland.kidsland.dto.response.Error createError(DTO dto) {
        return new Error()
                .setItemId(dto.getItemId())
                .setCategoryId(dto.getCategoryId())
                .setSubcategoryId(dto.getSubcategoryId());
    }
}
