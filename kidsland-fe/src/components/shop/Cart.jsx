import React, { useState } from "react";
import Logo from "../design/Logo";
import Footer from "../navigation/api/Footer";
import '../../css/cart/Cart.css';
import FloatingText from "../design/text/FloatingText";
import { Container } from "react-bootstrap";
import { emptyCart } from "../../constants/images";

function Cart() {
    const [items, setItems] = useState([]);

    return (
        <>
            <Logo />
            <Container>
                {items.length > 0 ?
                    <FloatingText text={`In my cart ${items} items`} /> :
                    <Container className="ms-5">
                        <FloatingText text="Your cart is currently empty :(" />
                        {emptyCart}
                    </Container>
                }
            </Container>
            <Footer />
        </>
    )
}

export default Cart;