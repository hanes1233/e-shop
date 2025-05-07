import { apiGet, apiPost } from "./client";
import cacheManager from "./CacheManager";
import { saveToken } from "./jwtService";
import { GET_USER, GET_TOKEN } from "../constants/urls";
import { ERROR, SUCCESS } from "../constants/state";
import { USER_NOT_FOUND, USER_EXPIRED } from "../constants/errors";
import { USER_CACHED, USER_NOT_CACHED } from "../constants/success";
import { clearStorages } from "./jwtService";

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
    let jwt;
    try {
        jwt = await apiPost(GET_TOKEN, payload);
    } catch (error) {
        return constructResult(ERROR, error.detail);
    }

    const token = {
        jwt: jwt,
        expiry: Date.now() + 60 * 60 * 1000
    };
    // Save token to session or local storage, depending on rememberMe value
    saveToken(token, rememberMe);

    let fetchedUser;
    try {
        fetchedUser = await apiGet(GET_USER, { email: email });
    } catch (error) {
        return constructResult(ERROR, error.detail);
    }

    // If user checked 'rememberMe', save credentials to cache
    if (rememberMe) {
        return saveToCache(fetchedUser, token);
    } else {
        const expiry = Date.now() + 20 * 60 * 1000;
        const isAdmin = validateRole(fetchedUser.administrator, fetchedUser.readOnly);
        cacheManager.addJwtUserInfo(token.jwt, isAdmin, expiry);
        return constructResult(SUCCESS, USER_NOT_CACHED, isAdmin);
    }
}

export const validateDataConsistency = (localToken, sessionToken) => {
    const localUserInfo = getValidUserInfo(localToken);
    const sessionUserInfo = getValidUserInfo(sessionToken);

    if (!localUserInfo && !sessionUserInfo) {
        clearStorages();
        throw new Error('User(s) with valid token(s) was not saved to cache neither to session data-storage for unknown reason. Both tokens will be removed from current session.');
    } else if (localUserInfo && sessionUserInfo) {
        clearStorages();
        throw new Error(`There are 2 valid tokens in cache and session with different users: Local Token User - ${localUserInfo.userId}, Session Token User - ${sessionUserInfo.userId}. Both tokens will be removed from current session.`);
    }
    return localUserInfo ? localToken : sessionToken;
}

export const constructResult = (state, detail, admin = false) => {
    return {
        STATE: state,
        DETAIL: detail,
        ADMIN: admin
    }
}

const saveToCache = (sourceUser, token) => {
    try {
        // Validate user credentials and expiry
        basicValidations(sourceUser);

        // Create user
        const userToCache = createUser(token, sourceUser);
        // Save user to cache
        const isAdmin = validateRole(sourceUser.administrator, sourceUser.readOnly)
        cacheManager.set(sourceUser.email, userToCache);
        cacheManager.addJwtUserInfo(token.jwt, isAdmin);
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
        throw new Error(USER_NOT_FOUND);
    }

    if (isExpired(sourceUser.validTo)) {
        throw new Error(USER_EXPIRED)
    }
}

const createUser = (token, sourceUser) => {
    return {
        token: token,
        admin: validateRole(sourceUser.administrator, sourceUser.readOnly),
        expiry: sourceUser.validTo
    }
}

const getValidUserInfo = (token) => {
    const userInfo = cacheManager.getCachedUserInfo(token.jwt);
    if (!userInfo) {
        return null;
    }
    if (isExpired(userInfo.expiry)) {
        cacheManager.deleteJwtUserInfo(token);
        return null;
    }
    return userInfo;
}