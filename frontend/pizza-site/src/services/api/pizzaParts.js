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
