import { apiGet, apiPost } from "./api";

// TODO: rename method
async function validate(data) {
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
    } else {
        // TODO: check if should remember
        localStorage.setItem("jwtToken", jwt);
        const fetchedUser = await apiGet('/api/users/find', { email: email });
        if (!fetchedUser) {
            console.log('User not found: ' + userToAdd);
        } else {
            console.log(fetchedUser);
        }
        const userToAdd = {
            password: password,
            token: jwt, // TODO: should be saved?
            administrator: fetchedUser.administrator,
            readOnly: fetchedUser.readOnly,
            expiry: fetchedUser.validTo
        }
        // TODO: check is user not expired
        this.cache.set(email, userToAdd);
        // TODO: check is user admin or readonly=false and redirect to corresponding page
    }
}