const BASE_URL = "https://localhost:7176/";
const BASE_URL_API = BASE_URL+"api";

export const createOrder = async (order) => {
    const response = await fetch(`${BASE_URL_API}/Orders`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(order)
    });

    return response;
};