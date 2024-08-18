import { makeImagePath } from "./makeImagePath";

const BASE_URL = "https://localhost:7176/";
const BASE_URL_API = BASE_URL+"api";

export const getAllToppings = async () => {
    const responce = await fetch(`${BASE_URL_API}/Toppings`);

    let parsed = await responce.json();
    
    return parsed;
}
