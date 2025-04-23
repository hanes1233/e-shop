
class CacheManager {

    constructor() {
        // Set cache expiry
        this.expiry = Date.now() + 60 * 60 * 1000;
        this.cache = new Map();
    }

    set(key, value) {
        this.checkExpiration();
        const expiry = Date.now() + 3600 * 1000;
        this.cache.set(key, { value, expiry });
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

    delete(key) {
        this.cache.delete(key);
    }

    checkExpiration() {
        if (this.expiry < Date.now()) {
            this.clear();
            this.expiry = Date.now() + 60 * 60 * 1000;
        }
    }

    clear() {
        this.cache.clear();
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