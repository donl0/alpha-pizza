import { makeImagePath } from "./api/makeImagePath"
import { BASE_URL } from "./urls";

export const parsePizza = (pizzas) => {
    for (let index = 0; index < pizzas.length; index++) {
        const costs = pizzas[index]["sizeCosts"].map( (item) => item["cost"])
        const sizes =  pizzas[index]["sizeCosts"].map((item) => item["size"]);
        pizzas[index]["costs"] = costs;
        pizzas[index]["sizes"] = sizes;
        pizzas[index]["price"] = Math.min(...costs);

        if (!pizzas[index]["imagePath"]) {
            continue;
        }
        
        pizzas[index]["imagePath"] = makeImagePath(pizzas[index]["imagePath"], BASE_URL);        
    }

    return pizzas
}

export const parsePizzasForMenu = (pizzas) => {
    if (!pizzas) {
        return pizzas;
    }

    pizzas = parsePizza(pizzas)

    pizzas = pizzas.filter(pizza => pizza["imagePath"]);

    for (let index = 0; index < pizzas.length; index++) {
        pizzas[index]["buttonCaption"] = "Order"
    }

    return pizzas;
}