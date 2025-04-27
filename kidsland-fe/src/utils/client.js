import { findToken } from "./jwtService";

const API_URL = "http://localhost:8080";

const fetchData = async (url, requestOptions) => {
    const apiUrl = `${API_URL}${url}`;

    return await fetch(apiUrl, requestOptions)
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

    const token = findToken();
    const apiUrl = `${url}?${new URLSearchParams(filteredParams)}`;
    const headers = getHeaders(token);
    const requestOptions = {
        method: "GET",
        headers: headers,
        credentials: "include"
    };

    try {
        const data = await fetchData(apiUrl, requestOptions);
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


const getHeaders = (token) => {
    let headers;
    if (token) {
        headers = {
            'Authorization': `Bearer ${token.jwt}`,
            'Content-Type': 'application/json'
        }
    } else {
        headers = {
            'Content-Type': 'application/json'
        }
    }
    return headers;
}