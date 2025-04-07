package com.kidsland.kidsland.utils;

import com.kidsland.kidsland.data.entity.ItemEntity;
import com.kidsland.kidsland.data.entity.ObjError;
import com.kidsland.kidsland.data.entity.ObjRegistrationRequest;
import com.kidsland.kidsland.dto.response.Error;
import lombok.experimental.UtilityClass;

@UtilityClass
public class KidslandUtils {

    public ObjError createObjError(ItemEntity item, ObjRegistrationRequest registrationRequest, Exception e) {
        ObjError objError = createObjError(item, registrationRequest);
        objError.setErrorContent(e.getClass().getSimpleName());
        objError.setStackTrace(e.getMessage());
        return objError;
    }

    public ObjError createObjError(ItemEntity item, ObjRegistrationRequest registrationRequest) {
        return new ObjError()
                .setItemId(item.getItemId())
                .setRequest(registrationRequest)
                .setItemId(item.getItemId())
                .setCategoryId(item.getCategoryId())
                .setSubcategoryId(item.getSubcategoryId());
    }

    public com.kidsland.kidsland.dto.response.Error createError(ItemEntity item, Exception e) {
        com.kidsland.kidsland.dto.response.Error error = createError(item);
        error.setStackTrace(e.getMessage());
        return error;
    }

    public com.kidsland.kidsland.dto.response.Error createError(ItemEntity item) {
        return new Error()
                .setItemId(item.getItemId())
                .setCategoryId(item.getCategoryId())
                .setSubcategoryId(item.getSubcategoryId());
    }
}
