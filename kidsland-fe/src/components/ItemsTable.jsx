import React, { useEffect, useState } from "react";
import Logo from "./design/Logo";
import { apiGet } from "../utils/api";
import LoadingPage from "./design/LoadingPage";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import FloatingText from "./design/text/FloatingText";

function ItemsTable(props) {
    const [items, setItems] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [retryCount, setRetryCount] = useState(0);
    const navigate = useNavigate();

    const URL = `${props.url}`;

    const noData = () => {
        if (retryCount < 3) {
            return (
                <>
                    <Container>
                        <FloatingText text={`Your data is loading... Attempt ${retryCount}`} />
                    </Container>
                </>
            )
        }
        navigate('/notfound');
    }

    useEffect(() => {
        apiGet(`/api/subcategory/find${URL}`).then((data) => {
            if (data != null) {
                setItems(data.items);
            } else {
                setItems(null);
                const refreshInterval = setInterval(() => {
                    if (!items && !isRefreshing) {
                        setIsRefreshing(true);
                        window.location.reload();
                    }
                }, 5000);
                return () => clearInterval(refreshInterval);
            }
        })
    }, [])

    return (
        <>
            <Logo />
            {!items ? noData() : items.map((item, index) => {
                return <p key={index}>{item.name}</p>;
            })}
        </>
    )
}

export default ItemsTable;