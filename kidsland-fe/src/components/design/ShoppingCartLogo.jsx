import React from "react";
import { shoppingCart } from "../../constants/images";
import '../../css/cart/Cart.css';
import { useNavigate } from "react-router-dom";

function ShoppingCartLogo() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cart');
    }

    return (
        <>
            <div className="shopping-cart" onClick={handleClick}>
                {shoppingCart}
            </div>
        </>
    )
}

export default ShoppingCartLogo;