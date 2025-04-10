import React, { useEffect, useState } from "react";
import Logo from "./design/Logo";
import { apiGet } from "../utils/api";

function ItemsTable(props) {

    const [items, setItems] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    //const URL = props.url;
    const tempURL = 'accessory';

    useEffect(() => {
        apiGet(`/api/subcategory/find/${tempURL}`).then((data) => {
            if (data != null) {
                console.log(data);
                setItems(data.accessoryDTOS);
            } else {
                console.log(`/api/subcategory${tempURL}`);
                console.log('data is null');
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
            {items.map((item, index) => {
                return <p key={index}>HELLO {item.itemName}</p>;
            })}
        </>
    )
}

export default ItemsTable;