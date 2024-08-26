import { BASE_URL_API } from "../urls";

export const getAllToppings = async () => {
    const responce = await fetch(`${BASE_URL_API}/Toppings`);

    let parsed = await responce.json();

    if (responce.status === 404) {
        return []
    }

    return parsed;
}
