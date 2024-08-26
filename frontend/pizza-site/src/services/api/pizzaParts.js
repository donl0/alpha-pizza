import { makeImagePath } from "./makeImagePath";

import { BASE_URL, BASE_URL_API } from "../urls";

export const getPizzaPartsForBuiled = async () => {
    const responce = await fetch(`${BASE_URL_API}/PizzaPiecesImages`);

    if (responce.status === 404) {
        return []
    }
    
    const pizzaPiecesImages = await responce.json();

    const result = pizzaPiecesImages.map(pizzaPieceImage => {
        const pizza = pizzaPieceImage.pizza;

        return {
            id: pizza.id,
            name: pizza.name,
            image: makeImagePath(pizza.imagePath, BASE_URL),
            price: pizzaPieceImage.piecePrice
        };
    });

    return result;
}

export const getPizzaWithImagesById = async (pizzaId) => {
    try {
        const response = await fetch(`${BASE_URL_API}/PizzaPiecesImages/${pizzaId}`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch pizza data for ID: ${pizzaId}`);
        }

        const pizzaPiecesImages = await response.json();

        const result = {
            pizzaId: pizzaPiecesImages.pizza.id,
            images: pizzaPiecesImages.piecesPath.map(imagePath => makeImagePath(imagePath, BASE_URL))
        };

        return result;

    } catch (error) {
        console.error("Error fetching pizza data:", error);
        return null;
    }
}