import React from "react";
import ShoppingCartLogo from "../../design/ShoppingCartLogo";
import Logo from "../../design/Logo";
import LoginBar from "../LoginBar";
import SearchBar from "../../search/SearchBar";
import Logout from "../../auth/Logout";

function ApiHeader() {
    const checkSession = () => {
        const session = sessionStorage.getItem('jwtToken');
        const local = localStorage.getItem('jwtToken');
        return session || local;
    }

    const loggedIn = checkSession();

    return (
        <>
            <ShoppingCartLogo />
            <Logo />
            {loggedIn ? <Logout /> :  <LoginBar /> }
            {loggedIn ? null : <SearchBar />}
        </>
    )
}

export default ApiHeader;