import { data } from "react-router-dom";

const API_URL = "http://localhost:8080";

const fetchData = (url, requestOptions) => {
    const apiUrl = `${API_URL}${url}`;

    return fetch(apiUrl, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error response: ${response.status} ${response.statusText}`);
            }

            const contentType = response.headers.get("Content-Type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            } else {
                return response.text();
            }
        })
        .catch((error) => {
            throw error;
        });
};

export const apiGet = async (url, params) => {
    const filteredParams = Object.fromEntries(
        Object.entries(params || {}).filter(([_, value]) => value != null)
    );

    const jwt = localStorage.getItem("jwtToken");
    console.log('jwt is ' + jwt);
    const apiUrl = `${url}?${new URLSearchParams(filteredParams)}`;
    const headers = jwt ? {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json'
    } : {
        'Content-Type': 'application/json'
    }
    const requestOptions = {
        method: "GET",
        headers: headers,
        credentials: "include"
    };

    try {
        const data = await fetchData(apiUrl, requestOptions);
        console.log(data);
        return data;
    } catch (error) {
        return null;
    }
};

export const apiPost = (url, data) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        credentials: "include"
    };

    return fetchData(url, requestOptions);
};