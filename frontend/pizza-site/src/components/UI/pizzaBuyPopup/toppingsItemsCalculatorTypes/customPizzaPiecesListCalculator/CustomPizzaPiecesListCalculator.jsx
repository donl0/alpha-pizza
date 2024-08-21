import { useContext, useEffect, useState } from "react";
import { getPizzaPartsForBuiled } from "../../../../../services/api/pizzaParts";
import ToppingsList from "../../../../buyPizzaPopup/toppingsList/ToppingsList";
import { PizzaPiecesPriseContext } from "../../../../orderPizzaMenuTypes/customPizzaMenu/CustomPizzaMenu";

const CustomPizzaPiecesListCalculator = ({ pieces, setPieces }) => {
    const [toppings, setToppings] = useState([]);

    const { piecesPrise, setPiecesPrise } = useContext(PizzaPiecesPriseContext);

    const maxPieces = 8;

    useEffect(() => {
        const fetchToppings = async () => {
            const toppings = await getPizzaPartsForBuiled();
            setToppings(toppings);
        };

        fetchToppings();
    }, []);

    function addSelectedPiece(pizzaId) {
        const countNonNull = pieces.filter(item => item !== null).length;

        if (countNonNull > maxPieces - 1) {
            return false;
        }

        const nullIndex = pieces.indexOf(null);

        if (nullIndex !== -1) {
            const newPieces = [...pieces];
            newPieces[nullIndex] = pizzaId;
            setPieces(newPieces);
            return true;
        }

        if (countNonNull < maxPieces) {
            const newPieces = [...pieces, pizzaId];
            setPieces(newPieces);
            return true;
        }

        return false;
    }

    function RemoveSelectedPiece(pizzaId) {
        const countNonNull = pieces.filter(item => item !== null).length;

        if (countNonNull !== 0) {
            const lastIndex = pieces.lastIndexOf(pizzaId);

            if (lastIndex !== -1) {
                const newPieces = [...pieces];
                newPieces[lastIndex] = null;
                setPieces(newPieces);
                return true;
            }
        }

        return false;
    }

    return (
        <ToppingsList
            currentCost={piecesPrise}
            setCurrentCost={setPiecesPrise}
            toppings={toppings}
            addSelected={addSelectedPiece}
            removeSelected={RemoveSelectedPiece}
        />
    );
};

export default CustomPizzaPiecesListCalculator;
