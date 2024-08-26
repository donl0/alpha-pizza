import { makeImagePath } from "./api/makeImagePath"
import { BASE_URL } from "./urls";

export const parseToppings = (toppings) => {
    for (let index = 0; index < toppings.length; index++) {
        toppings[index]["image"] = makeImagePath(toppings[index]["image"], BASE_URL);
    }

    return toppings;
}