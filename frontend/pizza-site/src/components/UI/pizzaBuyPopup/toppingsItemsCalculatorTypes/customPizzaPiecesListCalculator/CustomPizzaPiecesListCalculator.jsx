import { useContext, useEffect, useState } from "react";
import { getPizzaPartsForBuiled } from "../../../../../services/api/pizzaParts";
import ToppingsList from "../../../../buyPizzaPopup/toppingsList/ToppingsList";
import { PizzaPiecesPriseContext } from "../../../../orderPizzaMenuTypes/customPizzaMenu/CustomPizzaMenu";

let pieces = [];

const CustomPizzaPiecesListCalculator = () => {
    const [toppings, setToppings] = useState([]);
    const [selectedPieces, setSelectedPieces] = useState([]);
    const [piecesPrise, setPiecesPrise] = useContext(PizzaPiecesPriseContext)

    const maxPieces = 8;

    useEffect(() => {
        const fetchToppings = async () => {
            const topings = await getPizzaPartsForBuiled();
            setToppings(topings);
        };

        fetchToppings();
    }, []);

    function addSelectedPiece(pizzaId){
        if (pieces.length < maxPieces) {
            pieces.push(pizzaId);

            return true;
        }

        return false
    }

    function RemoveSelectedPiece(pizzaId){
        if (pieces.length == 0) {
            let lastElement = pieces[pieces.length - 1];

            let lastIndex = pieces.lastIndexOf(lastElement);

            if (lastIndex !== -1) {
                pieces[lastIndex] = null;
                return true;
            }
        }

        return false
    }

    return (
    <ToppingsList
        currentCost={piecesPrise}
        setCurrentCost={setPiecesPrise}
        toppings={toppings}
        addSelected={addSelectedPiece}
        removeSelected={RemoveSelectedPiece}>

    </ToppingsList>
    )
}

export default CustomPizzaPiecesListCalculator;