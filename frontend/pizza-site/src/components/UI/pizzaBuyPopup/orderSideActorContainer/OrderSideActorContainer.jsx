import { CurrentSizeContext, PriseContext, ToppingsCostContext } from "../../../pizzaOrderPopup/PizzaOrderPopup";
import PinkFadeActionButton from "../../Buttons/FadeActionButton/pinkFadeActionButton/PinkFadeActionButton";
import CustomSelect from "../../Select/CustomSelect";
import ToppingListCalculator from "../toppingsItemsCalculatorTypes/toppingListCalculator/ToppingListCalculator";
import styles from "./OrderSideActorContainer.module.css"
import React, { useContext, useEffect } from 'react';

const OrderSideActorContainer = ({ header, sizeCosts, costs, additionalToppingsContent, onOrderButtonClicked}) => {
    const { finalPrise, setFinalPrise } = useContext(PriseContext);

    const { currentSize, setCurrentSize } = useContext(CurrentSizeContext)
    const { currentToppingsCost, setCurrentToppingsCost } = useContext(ToppingsCostContext)

    useEffect(() => {
        if (sizeCosts && sizeCosts.length > 0) {
            const minSize = getMinSizeFromPizzasSize();
            setCurrentSize(minSize);
        }
    }, []);

    useEffect(() => {
        if (currentSize == undefined) {
            return;
        }

        updateFinalPrise();
    }, [currentToppingsCost, currentSize]);

    function updateFinalPrise() {
        setFinalPrise(getSizePrice(currentSize) + currentToppingsCost);
    }

    function updateSize(value) {
        setCurrentSize(value);
    }


    function getMinSizeFromPizzasSize() {
        return Math.min(...sizeCosts);
    }

    function getSizePrice(currentSize) {
        const sizeIndex = sizeCosts.indexOf(currentSize);
        if (sizeIndex !== -1) {
            return costs[sizeIndex];
        }
        
        return;
    }

    if (!sizeCosts || sizeCosts.length === 0 || !costs || costs.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.pizyPopup__menu__itemsContainer}>
            {header}
            <div className={styles.pizzaAllIngridients__customSelect}>
                <CustomSelect items={sizeCosts} currentChoosen={currentSize} setCurrent={updateSize}></CustomSelect>
            </div>

            <div className={styles.pizzaAllIngridients__toppingsList}>
                {additionalToppingsContent}
                <ToppingListCalculator></ToppingListCalculator>
            </div>

            <div className={styles.pizzaAllIngridients__price}>
                <span className={styles.pizzaAllIngridients__price__text}>{finalPrise} $</span>
            </div>
            <div className={styles.pizzaAllIngridients__orderButton}>
                <PinkFadeActionButton clickAction={onOrderButtonClicked}>Order</PinkFadeActionButton>
            </div>
        </div>
    );
}

export default OrderSideActorContainer;
