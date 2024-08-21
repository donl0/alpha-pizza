import { makeImagePath } from "./makeImagePath";

const BASE_URL = "https://localhost:7176/";
const BASE_URL_API = BASE_URL+"api";

export const getPizzaPartsForBuiled = async () => {
    const responce = await fetch(`${BASE_URL_API}/PizzaPiecesImages`);
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