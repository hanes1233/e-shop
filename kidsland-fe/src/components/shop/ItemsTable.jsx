import React, { useEffect, useState } from "react";
import Logo from "../design/Logo";
import { apiGet } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import FloatingText from "../design/text/FloatingText";
import Footer from "../navigation/Footer";
import SandClock from "../design/UIStates/SandClock";
import LoginBar from "../navigation/LoginBar";
import SearchBar from "../search/SearchBar";
import ShoppingCart from "../design/ShoppingCartLogo";
import Filter from "../search/Filter";
import '../../css/ItemGrid.css';

function ItemsTable(props) {
    const [items, setItems] = useState([]);
    const [retryCount, setRetryCount] = useState(1);
    const navigate = useNavigate();

    const URL = `${props.url}`;

    const noData = () => {
        if (retryCount < 6) {
            return (
                <>
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
    }, [URL]);

    useEffect(() => {
        if (items === null && retryCount <= 5) {
            const interval = setTimeout(() => {
                setRetryCount((prev) => prev + 1);
                apiGet(`/api/subcategory/find${URL}`).then((data) => {
                    if (data?.items) {
                        setItems(data.items);
                    }
                });
            }, 10000);

            return () => clearTimeout(interval);
        }

        if (retryCount > 5 && items === null) {
            navigate('/notfound');
        }
    }, [retryCount, items, URL, navigate]);

    return (
        <>
            <Logo />
            <ShoppingCart />
            <LoginBar />
            <SearchBar />
            {!items ? noData() : (
                <>
                    <Filter />
                    <Container className="item-grid mb-5">
                        {items.map((item, index) => (
                            <Card className="item-card" key={index}>
                                <Card.Img variant="top" src={item.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Container>
                    <Footer />
                </>
            )}
            <Footer />
        </>
    )
}

export default ItemsTable;