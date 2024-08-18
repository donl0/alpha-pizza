import { makeImagePath } from "./api/makeImagePath"

const BASE_URL = "https://localhost:7176/";

export const parseToppings = (toppings) => {
    for (let index = 0; index < toppings.length; index++) {
        toppings[index]["image"] = makeImagePath(toppings[index]["image"], BASE_URL);
    }

    return toppings
}