import React from "react";
import { shoppingCart } from "../../constants/images";
import '../../css/Navbar.css';

function ShoppingCart() {
    return(
        <>
            <div className="shopping-cart">
                {shoppingCart}
            </div>
        </>
    )
}

export default ShoppingCart;