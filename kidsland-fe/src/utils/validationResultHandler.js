import { SUCCESS } from "../constants/state"
import { USER_CACHED, USER_NOT_CACHED } from "../constants/success";
import { FORBIDDEN, UNAUTHORIZED } from "../constants/errors";

export const handleValidationResult = (validationResult, navigate) => {
    const STATE = validationResult.STATE;
    const DETAIL = validationResult.DETAIL;
    const ADMIN = validationResult.ADMIN;
    STATE === SUCCESS ? handleSuccess(DETAIL, ADMIN, navigate) : handleError(DETAIL, navigate);
}

const handleSuccess = (detail, admin, navigate) => {
    if (detail === USER_CACHED || detail === USER_NOT_CACHED) {
        admin ? navigate("/admin") : navigate("/");
    }
}

export const handleCachedCredentials = (cache) => {
    // TODO: implement
}

const handleError = (detail, navigate) => {
    // TODO: redirect
    switch(detail) {
        case FORBIDDEN: {
            console.log("forbidden");
            break;
        }
        case UNAUTHORIZED: {
            console.log("unauthorized");
            break;
        }
        default: break;
    }
}

// TODO: implement redirect mechanism