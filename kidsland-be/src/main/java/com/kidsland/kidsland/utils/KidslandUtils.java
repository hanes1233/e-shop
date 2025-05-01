package com.kidsland.kidsland.utils;

import com.kidsland.kidsland.data.entity.ObjError;
import com.kidsland.kidsland.data.entity.ObjRegistrationRequest;
import com.kidsland.kidsland.dto.base.DTO;
import com.kidsland.kidsland.dto.response.Error;
import lombok.experimental.UtilityClass;

@UtilityClass
public class KidslandUtils {

    public ObjError createObjError(DTO dto, ObjRegistrationRequest registrationRequest, Exception e) {
        ObjError objError = createObjError(dto, registrationRequest);
        objError.setErrorContent(e.getClass().getSimpleName());
        objError.setStackTrace(e.getMessage());
        return objError;
    }

    public ObjError createObjError(DTO dto, ObjRegistrationRequest registrationRequest) {
        return new ObjError()
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
