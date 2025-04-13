import React from "react";
import ShoppingCart from "../ShoppingCart";
import Logo from "../../design/Logo";
import LoginBar from "../LoginBar";
import SearchBar from "../../search/SearchBar";

function GuestHeader() {
    return (
        <>
            <ShoppingCart />
            <Logo />
            <LoginBar />
            <SearchBar />
        </>
    )
}

export default GuestHeader;