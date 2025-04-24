import { apiGet, apiPost } from "./api";
import cacheManager from "./CacheManager";
import { saveToken } from "./jwtService";

export const validate = async (data, rememberMe) => {
    const email = data.email;
    const password = data.password;

    const payload = {
        email: email,
        password: password
    }

    // Try to get JWT
    const jwt = await apiPost('/api/auth/login', payload);

    if (!jwt) {
        // TODO: fetch(login) was not successful
        var message;
        notifyUser(message);
    } else {
        const token = {
            jwt: jwt,
            expiry: Date.now() + 60 * 60 * 1000
        };
        // Save token to session or local storage, depending on rememberMe value
        saveToken(token, rememberMe);

        const fetchedUser = await apiGet('/api/users/find', { email: email });

        // TODO: check if should save first ! (depends on rememberMe value)
        const userToAdd = createUser(fetchedUser, password, token);

        if (!fetchedUser) {
            console.log('User not found: ' + userToAdd);
        } else {
            console.log(fetchedUser);
        }
    }
}

const createUser = (sourceUser, password, token) => {
    try {
        basicValidations(sourceUser);
    } catch (error) {
        // TODO: redirect?
    }

    const userToCache = {
        password: password,
        token: token,
        admin: validateRole(sourceUser.administrator, sourceUser.readOnly),
        expiry: sourceUser.validTo
    }
    cacheManager.set(sourceUser.email, userToCache);
    return userToCache;
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
        // TODO: user not found > notifyUser
        var message;
        notifyUser();
        throw new Error("User not found");
    }

    if (isExpired(sourceUser.validTo)) {
        // TODO: user is expired
        var message;
        notifyUser();
        throw new Error("User is expired")
    }
}

const notifyUser = (message) => {}