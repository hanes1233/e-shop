import { SUCCESS } from "../constants/state"
import { USER_CACHED, USER_NOT_CACHED } from "../constants/success";
import { INVALID_CREDENTIALS, FETCH_ERROR, USER_NOT_FOUND, USER_EXPIRED, FORBIDDEN } from "../constants/errors";

export const handleValidationResult = (validationResult, navigate) => {
    const STATE = validationResult.STATE;
    const DETAIL = validationResult.DETAIL;
    const ADMIN = validationResult.ADMIN;
    STATE === SUCCESS ? handleSuccess(DETAIL, ADMIN, navigate) : handleError(DETAIL, navigate);
}

export const handleCachedCredentials = (cache) => {
    // TODO: implement
}

const handleSuccess = (detail, admin, navigate) => {
    if (detail === USER_CACHED || detail === USER_NOT_CACHED) {
        admin ? navigate("/admin") : navigate("/");
    }
}

const handleError = (detail, navigate) => {
    // TODO: redirect
    if (detail === FORBIDDEN) {
        console.log('Im forbidden');
    }
}

// TODO: implement redirect mechanism