// Validation errors
export const USER_NOT_FOUND = 'NOT_FOUND';
export const USER_EXPIRED = 'USER_EXPIRED';

// Response errors
export const BAD_REQUEST = 'BAD_REQUEST';
export const UNAUTHORIZED = 'UNAUTHORIZED';
export const FORBIDDEN = 'FORBIDDEN';
export const NOT_FOUND = 'NOT_FOUND';
export const SERVER_ERROR = 'SERVER_ERROR';

export const getErrorByCode = (code) => {
    switch (code) {
        case 400:
            return BAD_REQUEST;
        case 401:
            return UNAUTHORIZED;
        case 403:
            return FORBIDDEN;
        case 404:
            return NOT_FOUND;
        case 500:
            return SERVER_ERROR;
        default:
            return 'Unknown Error';
    }
};