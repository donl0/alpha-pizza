import { createContext, useContext, useEffect, useState } from "react";
import OrderSideActorContainer from "../../UI/pizzaBuyPopup/orderSideActorContainer/OrderSideActorContainer";
import PizzaOrderPopupMenuSplitter from "../../UI/pizzaBuyPopup/pizzaOrderPopupMenuSplitter/PizzaOrderPopupMenuSplitter";
import CustomPizzaPiecesListCalculator from "../../UI/pizzaBuyPopup/toppingsItemsCalculatorTypes/customPizzaPiecesListCalculator/CustomPizzaPiecesListCalculator";
import { CurrentSizeContext, PriseContext, ToppingsCostContext } from "../../pizzaOrderPopup/PizzaOrderPopup";
import { getSizePriceWhereSame } from "../../../utils/sizeWorker";
import SimpleImageBlock from "../../UI/pizzaBuyPopup/pizzaOrderPopupMenuSplitter/imagesBlockes/simpleImageBlock/SimpleImageBlock";
import SeveralPicturesAtOneBlock from "../../UI/pizzaBuyPopup/pizzaOrderPopupMenuSplitter/imagesBlockes/severalPicturesAtOneBlock/SeveralPicturesAtOneBlock";
import CustomPizzaImageBlock from "../../buyPizzaPopup/customPizzaImageBlock/CustomPizzaImageBlock";

export const PizzaPiecesPriseContext = createContext();

const CustomPizzaMenu = () => {
    const { currentSize, setCurrentSize } = useContext(CurrentSizeContext)
    const { currentToppingsCost, setCurrentToppingsCost } = useContext(ToppingsCostContext)
    const {finalPrise, setFinalPrise} = useContext(PriseContext);
    const [selectedPiecesInPizzasId, setSelectedPiecesInPizzasId] = useState([]);

    const [piecesPrise, setPiecesPrise] = useState(0);


    const sizes = [15, 25, 35]
    const costs = [5, 8, 10]
    
    useEffect(() => {
        if (currentSize == undefined) {
            return;
        }

        updateFinalPrise();
    }, [currentToppingsCost, currentSize, piecesPrise]);


    function updateFinalPrise() {
        setFinalPrise(getSizePriceWhereSame(currentSize, sizes, costs) + currentToppingsCost + piecesPrise);
    }

    function onOrderButtonClicked(){
        //TO DO
    }

    return (
        <PizzaPiecesPriseContext.Provider value={{piecesPrise, setPiecesPrise}}>
            <PizzaOrderPopupMenuSplitter ImageBlock={<CustomPizzaImageBlock pizzaIds={selectedPiecesInPizzasId}></CustomPizzaImageBlock>}
            orderMenuContent={<OrderSideActorContainer
                sizeCosts={sizes}
                costs={costs}
                onOrderButtonClicked={onOrderButtonClicked}
                additionalToppingsContent={<CustomPizzaPiecesListCalculator 
                    pieces={selectedPiecesInPizzasId}
                    setPieces={setSelectedPiecesInPizzasId}
            />}
                >
                
                </OrderSideActorContainer>}>

                </PizzaOrderPopupMenuSplitter>
        </PizzaPiecesPriseContext.Provider>
    )
}

export default CustomPizzaMenu;