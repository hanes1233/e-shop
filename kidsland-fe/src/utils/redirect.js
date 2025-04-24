import { SUCCESS } from "../constants/state"
import { USER_CACHED } from "../constants/success";
import { INVALID_CREDENTIALS, FETCH_ERROR, NOT_FOUND, USER_EXPIRED } from "../constants/errors";

export const handleValidationResult = (validationResult) => {
    const STATE = validationResult.STATE;
    const DETAIL = validationResult.DETAIL;
    STATE === SUCCESS ? handleSuccess(DETAIL) : handleError(DETAIL);
}

export const handleCachedCredentials = (cache) => {
    // TODO: implement
}

const handleSuccess = (detail) => {
    if (detail === USER_CACHED) {
        // TODO: redirect
    }
}

const handleError = (detail) => {
    // TODO: redirect
    switch (detail) {
        case INVALID_CREDENTIALS: return '';
        case FETCH_ERROR: return '';
        case NOT_FOUND: return '';
        case USER_EXPIRED: return '';
        default: return '';
    }
}

// TODO: implement redirect mechanism