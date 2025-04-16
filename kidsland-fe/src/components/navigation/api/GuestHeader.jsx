import React from "react";
import ShoppingCartLogo from "../../design/ShoppingCartLogo";
import Logo from "../../design/Logo";
import LoginBar from "../LoginBar";
import SearchBar from "../../search/SearchBar";

function GuestHeader() {
    return (
        <>
            <ShoppingCartLogo />
            <Logo />
            <LoginBar />
            <SearchBar />
        </>
    )
}

export default GuestHeader;