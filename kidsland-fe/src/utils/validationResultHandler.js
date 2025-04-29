import { USER_CACHED, USER_NOT_CACHED } from "../constants/success";
import { FORBIDDEN, UNAUTHORIZED } from "../constants/errors";

export const handleSuccess = (validationResult, navigate) => {
    const detail = validationResult.DETAIL;
    const admin = validationResult.ADMIN;
    if (detail === USER_CACHED || detail === USER_NOT_CACHED) {
        admin ? navigate("/admin") : navigate("/");
    }
}

export const handleCachedCredentials = (cache) => {
    //cachedUser.admin ? //TODO: redirect to admin panel : //TODO: redirect to user panel
}

export const buildMessage = (detail) => {
    switch(detail) {
        case FORBIDDEN: return 'You are not allowed to access this resource';
        case UNAUTHORIZED: return 'Provided email or password is incorrect.';
        default: return null;
    }
}