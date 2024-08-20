import { createOrder } from "../../../../services/api/order";
import { getAllToppings } from "../../../../services/api/topping";
import { parseToppings } from "../../../../services/parceTopping";
import ToppingsList from "../../../buyPizzaPopup/toppingsList/ToppingsList";
import { CurrentSizeContext, PriseContext, ToppingsContext } from "../../../pizzaOrderPopup/PizzaOrderPopup";
import PinkFadeActionButton from "../../Buttons/FadeActionButton/pinkFadeActionButton/PinkFadeActionButton";
import CustomSelect from "../../Select/CustomSelect";
import styles from "./OrderSideActorContainer.module.css"
import React, { useContext, useEffect, useState } from 'react';

const OrderSideActorContainer = ({header, sizeCosts, costs, additionalToppingsContent, onOrderButtonClicked}) => {
    const {finalPrise, setFinalPrise} = useContext(PriseContext);
    const {selectedToppings, setSelectedToppings} = useContext(ToppingsContext);

    const [currentToppingsCost, setCurrentToppingsCost] = useState(0);
    const {currentSize, setCurrentSize} = useContext(CurrentSizeContext)

    useEffect( () => {
        const minSize = getMinSizeFromPizzasSize();
        setCurrentSize(minSize);
    }, [])

    const [toppings, setToppings] = useState([]);

    useEffect(() => {
        const fetchToppings = async () => {
            const fetchedToppings = await getAllToppings();
            const parsedToppings = parseToppings(fetchedToppings);
            setToppings(parsedToppings);
        };

        fetchToppings();
    }, []);

    useEffect(() => {
        if (currentSize == undefined){
            return;
        }

        updateFinalPrise();
    }, [currentToppingsCost, currentSize]);

    function addSelectedTopping(id) {
        setSelectedToppings(prevSelectedToppings => {
            const newSelectedToppings = { ...prevSelectedToppings };
            if (!newSelectedToppings.hasOwnProperty(id)) {
                newSelectedToppings[id] = 1;
            } else {
                newSelectedToppings[id] += 1;
            }
            return newSelectedToppings;
        });
    }

    function removeSelectedTopping(id) {
        setSelectedToppings(prevSelectedToppings => {
            const newSelectedToppings = { ...prevSelectedToppings };
            if (newSelectedToppings[id] > 0) {
                newSelectedToppings[id] -= 1;
            }

            if (newSelectedToppings[id] === 0) {
                delete newSelectedToppings[id];
            }

            return newSelectedToppings;
        });
    }

    function updateFinalPrise() {
        setFinalPrise(getSizePrice(currentSize) + currentToppingsCost);
    }

    function handleCurrentToppingsCost(value) {
        setCurrentToppingsCost(value);
    }

    function updateSize(value) {
        setCurrentSize(value);
    }

    function getMinSizeFromPizzasSize() {
        const price = Math.min(...sizeCosts.map((item) => item["size"]));

        return price;
    }

    function getSizePrice(currentSize) {
        const result = sizeCosts.find((sizeCost) => sizeCost["size"] === currentSize);

        if (result !== null && result !== undefined) {
            return result["cost"];
        }

        throw new Error('Not found!');
    }

    return (
        <div className={styles.pizyPopup__menu__itemsContainer}>
            {header}
            <div className={styles.pizzaAllIngridients__customSelect}>
                <CustomSelect items={costs} currentChoosen={currentSize} setCurrent={updateSize}></CustomSelect>
            </div>

            <div className={styles.pizzaAllIngridients__toppingsList}>
                {additionalToppingsContent}
                <ToppingsList
                    currentCost={currentToppingsCost}
                    setCurrentCost={handleCurrentToppingsCost}
                    toppings={toppings}
                    addSelected={addSelectedTopping}
                    removeSelected={removeSelectedTopping}
                ></ToppingsList>
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
