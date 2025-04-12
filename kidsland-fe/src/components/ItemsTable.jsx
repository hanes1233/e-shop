import React, { useEffect, useState } from "react";
import Logo from "./design/Logo";
import { apiGet } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import FloatingText from "./design/text/FloatingText";
import Footer from "./navigation/Footer";
import SandClock from "./design/SandClock";
import LoginBar from "./navigation/LoginBar";
import SearchBar from "./design/SearchBar";
import ShoppingCart from "./navigation/ShoppingCart";

function ItemsTable(props) {
    const [items, setItems] = useState([]);
    const [retryCount, setRetryCount] = useState(1);
    const navigate = useNavigate();

    const URL = `${props.url}`;

    const noData = () => {
        if (retryCount < 6) {
            return (
                <>
                    <ShoppingCart />
                    <LoginBar />
                    <Container>
                        <div className="text-center">
                            <FloatingText text={`Your data is loading... Attempt ${retryCount}`} />
                        </div>
                    </Container>
                    <SandClock />
                    <Footer />
                </>
            )
        }
        navigate('/notfound');
    }

    useEffect(() => {
        const fetchData = () => {
            apiGet(`/api/subcategory/find${URL}`).then((data) => {
                if (data?.items) {
                    setItems(data.items);
                } else {
                    setItems(null);
                }
            });
        };

        fetchData();

        const interval = setInterval(() => {
            setRetryCount((prev) => {
                if (prev >= 5) {
                    clearInterval(interval);
                    navigate('/notfound');
                    return prev;
                }
                fetchData();
                return prev + 1;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Logo />
            <ShoppingCart />
            <LoginBar />
            <SearchBar />
            {!items ? noData() : items.map((item, index) => {
                return <p key={index}>{item.name}</p>;
            })}
            <Footer />
        </>
    )
}

export default ItemsTable;