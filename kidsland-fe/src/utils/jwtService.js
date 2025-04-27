import { validateDataConsistency } from "./userValidations";

export const saveToken = (token, storage) => {
    if (storage) {
        localStorage.setItem("jwtToken", JSON.stringify(token));
    } else {
        sessionStorage.setItem("jwtToken", JSON.stringify(token));
    }
}

export const findToken = () => {
    let localToken = checkLocalStorage(localStorage);
    let sessionToken = checkSessionStorage(sessionStorage);

    if (!localToken && !sessionToken) {
        return null;
    } else if (localToken && sessionToken) {
        if (localToken !== sessionToken) {
            return validateDataConsistency(localToken, sessionToken);
        }
        return localToken;
    }
    return localToken ? localToken : sessionToken;
}

export const clearStorages = () => {
    localStorage.clear();
    sessionStorage.clear();
}

const isTokenValid = (token) => {
    return Date.now() < token.expiry;
}

const checkStorage = (storageType) => {
    const rawToken = storageType.getItem("jwtToken");
    if (rawToken) {
        const parsedToken = JSON.parse(rawToken);
        if (isTokenValid(parsedToken)) {
            return parsedToken;
        }
        storageType.clear();
    }
    return null;
}

const checkLocalStorage = () => checkStorage(localStorage);

const checkSessionStorage = () => checkStorage(sessionStorage);