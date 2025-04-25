export const lookUpForToken = () => {
    const localStorageToken = checkLocalStorage();
    const sessionStorageToken = checkSessionStorage();
    if (localStorageToken) {
        return localStorageToken;
    } else if (sessionStorageToken) {
        return sessionStorageToken;
    }
    return null;
};

export const saveToken = (token, storage) => {
    if (storage) {
        localStorage.setItem("jwtToken", JSON.stringify(token));
    } else {
        sessionStorage.setItem("jwtToken", JSON.stringify(token));
    }
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