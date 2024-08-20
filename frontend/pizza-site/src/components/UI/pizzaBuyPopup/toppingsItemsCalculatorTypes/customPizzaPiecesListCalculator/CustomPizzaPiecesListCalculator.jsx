import { useContext, useEffect, useState } from "react";
import { getPizzaPartsForBuiled } from "../../../../../services/api/pizzaParts";
import ToppingsList from "../../../../buyPizzaPopup/toppingsList/ToppingsList";
import { PizzaPiecesPriseContext } from "../../../../orderPizzaMenuTypes/customPizzaMenu/CustomPizzaMenu";

let pieces = [];

const CustomPizzaPiecesListCalculator = () => {
    const [toppings, setToppings] = useState([]);
    const [selectedPieces, setSelectedPieces] = useState([]);
    const {piecesPrise, setPiecesPrise} = useContext(PizzaPiecesPriseContext)

    const maxPieces = 8;

    useEffect(() => {
        const fetchToppings = async () => {
            const topings = await getPizzaPartsForBuiled();
            setToppings(topings);
        };

        fetchToppings();
    }, []);

    function addSelectedPiece(pizzaId){
        const countNonNull = pieces.filter(item => item !== null).length;

        if (countNonNull > maxPieces -1) {
            return false
        }

        const nullIndex = pieces.indexOf(null);

        if (nullIndex !== -1) {
            pieces[nullIndex] = pizzaId;
            return true;
        }

        if (countNonNull < maxPieces) {
            pieces.push(pizzaId);
            return true;
        }

        return false
    }

    function RemoveSelectedPiece(pizzaId){
        const countNonNull = pieces.filter(item => item !== null).length;

        if (countNonNull !== 0) {
            const lastIndex = pieces.lastIndexOf(pizzaId);

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