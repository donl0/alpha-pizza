import { BASE_URL, BASE_URL_API } from "../urls";
import { makeImagePath } from "./makeImagePath";

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

export const getLastOrders = async () => {
    const responce = await fetch(`${BASE_URL_API}/Orders`);

    if (responce.status === 404) {
        return []
    }
    
    let parsed = await responce.json();

    for (let index = 0; index < parsed.length; index++) {
        parsed[index]["pizza"]["imagePath"] = makeImagePath(parsed[index]["pizza"]["imagePath"], BASE_URL);
    }
    
    return parsed;
}

export const getOrderById = async (orderId) => {
    const response = await fetch(`${BASE_URL_API}/Orders/${orderId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch order');
    }
    const order = await response.json();

    for (let index = 0; index < order["toppings"].length; index++) {

        order["toppings"][index]["topping"]["image"] = makeImagePath(order["toppings"][index]["topping"]["image"], BASE_URL);

    }
    return order;
};