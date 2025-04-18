import { apiGet, apiPost } from "./api";

class CacheManager {

    constructor() {
        this.cache = new Map();
    }

    set(key, value) {
        const expiry = Date.now() + 3600 * 1000;
        this.cache.set(key, { value, expiry });
    }

    get(key) {
        const user = this.cache.get(key);
        if (!user) {
            return null;
        }

        if (Date.now() > user.expiry) {
            this.cache.delete(key);
            return null;
        }

        return user.value;
    }

    has(key) {
        return this.get(key) !== null;
    }

    delete(key) {
        this.cache.delete(key);
    }

    clear() {
        this.cache.clear();
    }

    async validate(data) {
        const user = this.cache.get(data.email);
        if (!user) {
            const email = data.email;
            const password = data.password;

            const payload = {
                email: email,
                password: password
            }

            const jwtToken = await apiPost('/api/auth/login', payload);

            if (!jwtToken) {
                // TODO: fetch(login) was not successful
            } else {
                // TODO: check if should remember
                const userToAdd = {
                    password: password,
                    token: jwtToken
                }
                this.cache.set(email, userToAdd);
            }
        } else {
            const password = data.password;
            this.validatePassword(user, password);
        }
    }

    validatePassword(user, password) {
        const userPassword = user.password;
        if (password === userPassword) {
            const token = user.token;
            const isTokenValid = this.validateToken(token);
            if (isTokenValid) {
                // redirect to admin panel
            } else {
                // redirect to main page
            }
        }
    }

    validateToken(user, token) {
        const userToken = user.token;
        return token === userToken;
    }

}

const cacheManager = new CacheManager();
export default cacheManager;