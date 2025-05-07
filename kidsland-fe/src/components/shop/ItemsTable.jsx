import React, { useEffect, useState } from "react";
import { apiGet } from "../../utils/client";
import { useNavigate } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import FloatingText from "../design/text/FloatingText";
import Footer from "../navigation/api/Footer";
import SandClock from "../design/UIStates/SandClock";
import Filter from "../search/Filter";
import { GET_SUBCATEGORY } from "../../constants/urls";
import '../../css/ItemGrid.css';
import ApiHeader from "../navigation/api/ApiHeader";

function ItemsTable(props) {
    const [items, setItems] = useState([]);
    const [retryCount, setRetryCount] = useState(1);
    const navigate = useNavigate();

    const URL = `${props.url}`;

    useEffect(() => {
        const fetchData = () => {
            apiGet(`${GET_SUBCATEGORY}${URL}`).then((data) => {
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
                apiGet(`${GET_SUBCATEGORY}${URL}`).then((data) => {
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
            <ApiHeader />
            {!items ? (<>
                <Container>
                    <div className="text-center">
                        <FloatingText text={`Your data is loading... Attempt ${retryCount}`} />
                    </div>
                </Container>
                <SandClock />
                <Footer /></>) : (
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