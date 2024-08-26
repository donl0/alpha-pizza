import { BASE_URL_API } from "../urls";

export const getAllPizzas = async () => {
    const responce = await fetch(`${BASE_URL_API}/Pizzas`);

    if (responce.status === 404) {
        return []
    }

    let parsed = await responce.json();
    
    return parsed;
}

export const getPizzaById = async (id) => {
    const responce = await fetch(`${BASE_URL_API}/Pizzas/${id}`);

    let parsed = await responce.json();
    
    return parsed;
}