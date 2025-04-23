import { apiGet, apiPost } from "./api";

export async function validate(data) {
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
        notifyUser(message);
    } else {
        // TODO: check if should remember
        const token = {
            jwt: jwt,
            expiry: Date.now() + 60 * 60 * 1000
        };
        localStorage.setItem("jwtToken", JSON.stringify(token));
        const fetchedUser = await apiGet('/api/users/find', { email: email });
        const userToAdd = createUser(fetchedUser, password, token);

        if (!fetchedUser) {
            console.log('User not found: ' + userToAdd);
        } else {
            console.log(fetchedUser);
        }
    }
}

function createUser(sourceUser, password, token) {
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
    this.cache.set(sourceUser.email, userToCache);
    return userToCache;
}

function validateRole(role, readOnly) {
    if (role || !readOnly) {
        return true;
    }
    return false;
}

function isExpired(expiry) {
    if (!expiry) {
        return false;
    }
    return expiry > Date.now();
}

function basicValidations(sourceUser) {
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

function notifyUser(message) {}