import { apiGet, apiPost } from "./client";
import cacheManager from "./CacheManager";
import { saveToken } from "./jwtService";
import { GET_USER, GET_TOKEN } from "../constants/urls";
import { ERROR, SUCCESS } from "../constants/state";
import { INVALID_CREDENTIALS, FETCH_ERROR, NOT_FOUND, USER_EXPIRED } from "../constants/errors";
import { USER_CACHED } from "../constants/success";
import { cache } from "react";

export const validate = async (data, rememberMe) => {
    // Retrieve credentials from 'data' parameter
    const email = data.email;
    const password = data.password;

    // Build payload
    const payload = {
        email: email,
        password: password
    }

    // Try to get JWT
    const jwt = await apiPost(GET_TOKEN, payload);

    if (!jwt) {
        return constructResult(ERROR, INVALID_CREDENTIALS);
    } else {
        const token = {
            jwt: jwt,
            expiry: Date.now() + 60 * 60 * 1000
        };
        // Save token to session or local storage, depending on rememberMe value
        saveToken(token, rememberMe);

        const fetchedUser = await apiGet(GET_USER, { email: email });

        if (!fetchedUser) {
            return constructResult(ERROR, FETCH_ERROR);
        } else {
            // TODO: remove this line when no needed
            console.log(fetchedUser);
            // If user checked 'rememberMe', save credentials to cache
            if (rememberMe) {
                return saveToCache(fetchedUser, password, token);
            }
        }
    }
}

const saveToCache = (sourceUser, password, token) => {
    try {
        // Validate user credentials and expiry
        basicValidations(sourceUser);

        // Create user
        const userToCache = createUser(password, token, sourceUser);

        // Save user to cache
        cacheManager.set(sourceUser.email, userToCache);
    } catch (error) {
        return constructResult(ERROR, error.message)
    }
    const isAdmin = validateRole(sourceUser.administrator, sourceUser.readOnly);
    return constructResult(SUCCESS, USER_CACHED, isAdmin);
}

const validateRole = (role, readOnly) => {
    if (role || !readOnly) {
        return true;
    }
    return false;
}

const isExpired = (expiry) => {
    if (!expiry) {
        return false;
    }
    return expiry > Date.now();
}

const basicValidations = (sourceUser) => {
    if (!sourceUser) {
        throw {
            message: NOT_FOUND
        }
    }

    if (isExpired(sourceUser.validTo)) {
        throw {
            message: USER_EXPIRED
        }
    }
}

const createUser = (password, token, sourceUser) => {
    return {
        password: password,
        token: token,
        admin: validateRole(sourceUser.administrator, sourceUser.readOnly),
        expiry: sourceUser.validTo
    }
}

const constructResult = (state, detail, admin = false) => {
    return {
        STATE: state,
        DETAIL: detail,
        ADMIN: admin
    }
}