import { makeImagePath } from "./api/makeImagePath"

const BASE_URL = "https://localhost:7176/";

export const parsePizza = (pizzas) => {
    for (let index = 0; index < pizzas.length; index++) {
        pizzas[index]["imagePath"] = makeImagePath(pizzas[index]["imagePath"], BASE_URL);        
        
        const costs = pizzas[index]["sizeCosts"].map( (item) => item["cost"])

        pizzas[index]["price"] = Math.min(...costs);
    }

    return pizzas
}

export const parsePizzasForMenu = (pizzas) => {
    pizzas = parsePizza(pizzas)

    for (let index = 0; index < pizzas.length; index++) {
        pizzas[index]["buttonCaption"] = "Order"
    }

    return pizzas;
}