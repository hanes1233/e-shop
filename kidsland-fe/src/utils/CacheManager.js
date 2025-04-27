
class CacheManager {

    constructor() {
        // Set cache expiry
        this.expiry = Date.now() + 60 * 60 * 1000;
        this.cache = new Map();
        this.secondPhaseCache = new Map();
    }

    set(key, value) {
        // First phase (general) cache
        this.checkExpiration();
        const expiry = Date.now() + 3600 * 1000;
        this.cache.set(key, { value, expiry });
        // Second phase (internal) cache
        const jwt = value.token;
        const admin = value.admin;
        this.addJwtUserInfo(jwt, admin, expiry);
    }

    addJwtUserInfo(key, admin, expiry) {
        this.secondPhaseCache.set(key, { admin, expiry });
    }

    get(key, password) {
        this.checkExpiration();
        const user = this.cache.get(key);
        if (!user) {
            return null;
        }

        const isPasswordMatch = this.isPasswordMatch(user.password, password);
        const isUserExpired = this.isUserExpired(key,user);

        if (isPasswordMatch && !isUserExpired) {
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

    isPasswordMatch(cachedPassword, inputPassword) {
        if (!cachedPassword || !inputPassword) {
            return false;
        }
        return cachedPassword === inputPassword;
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