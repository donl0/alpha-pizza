import { makeImagePath } from "./makeImagePath";

const BASE_URL = "https://localhost:7176/";
const BASE_URL_API = BASE_URL+"api";

export const getLastOrders = async () => {
    const responce = await fetch(`${BASE_URL_API}/Orders`);

    let parsed = await responce.json();

    for (let index = 0; index < parsed.length; index++) {
        parsed[index]["pizza"]["imagePath"] = makeImagePath(parsed[index]["pizza"]["imagePath"], BASE_URL);
    }
    
    return parsed;
}

export const getAllPizzas = async () => {
    const responce = await fetch(`${BASE_URL_API}/Pizzas`);

    let parsed = await responce.json();
    
    return parsed;
}

export const createOrder = async (order) => {
    await fetch(`${BASE_URL_API}/Orders`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        bosy: JSON.stringify(order)
    }) 
}