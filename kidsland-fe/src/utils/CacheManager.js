import { VERIFY_USER } from "../constants/urls";
import { apiPost } from "./client";

class CacheManager {
    // Private static instance
    static instance = null;

    constructor() {
        if (CacheManager.instance) {
            return CacheManager.instance;
        }

        // Otherwise, initialize the instance
        this.expiry = Date.now() + 7 * 24 * 60 * 60 * 1000;
        this.cache = new Map();
        this.secondPhaseCache = new Map();

        // Set the static instance to this instance
        CacheManager.instance = this;
    }

    set(key, value) {
        // First phase (general) cache
        this.checkExpiration();
        const expiry = Date.now() + 24 * 60 * 60 * 1000;
        this.cache.set(key, { value, expiry });
        // Second phase (internal) cache
        const jwt = value.token;
        const admin = value.admin;
        this.addJwtUserInfo(jwt, admin, expiry);
    }

    addJwtUserInfo(key, admin, expiry) {
        this.secondPhaseCache.set(key, { admin, expiry });
    }

    async get(key, password) {
        this.checkExpiration();
        console.log(this.cache);
        const user = this.cache.get(key);
        if (!user) {
            return null;
        }

        const isUserExpired = this.isUserExpired(key, user);

        const isUserValid = await this.verifyCredentials(key, password);

        if (isUserValid && !isUserExpired) {
            return user;
        } else {
            return null;
        }
    }

    getCachedUserInfo(key) {
        return this.secondPhaseCache.get(key);
    }

    delete(key) {
        this.cache.delete(key);
    }

    deleteJwtUserInfo(key) {
        this.secondPhaseCache.delete(key);
    }

    checkExpiration() {
        if (this.expiry < Date.now()) {
            this.clear();
            this.expiry = Date.now() + 60 * 60 * 1000;
        }
    }

    clear() {
        this.cache.clear();
        this.secondPhaseCache.clear();
    }

    async verifyCredentials(email, password) {
        const payload = {
            email: email,
            password: password
        }
        try {
            const response = await apiPost(VERIFY_USER, payload);
            return response.ok;
        } catch (error) {
            return false;
        }
    }

    isUserExpired(key,cachedUser) {
        if (Date.now() > cachedUser.expiry) {
            this.cache.delete(key);
            return true;
        }
        return false;
    }
}

const cacheManager = new CacheManager();
export default cacheManager;