import { createOrder } from "../../../../services/api/order";
import { getAllToppings } from "../../../../services/api/topping";
import { parseToppings } from "../../../../services/parceTopping";
import ToppingsList from "../../../buyPizzaPopup/toppingsList/ToppingsList";
import PinkFadeActionButton from "../../Buttons/FadeActionButton/pinkFadeActionButton/PinkFadeActionButton";
import CustomSelect from "../../Select/CustomSelect";
import styles from "./OrderSideActorContainer.module.css"
import React, { useEffect, useState } from 'react';

let selectedToppings = {};

const OrderSideActorContainer = ({header, sizeCosts, costs, additionalToppingsContent}) => {
    const [finalPrice, setFinalPrice] = useState(0);
    const [currentToppingsCost, setCurrentToppingsCost] = useState(0);
    const [currentSize, setSize] = useState(()=>{
        const minPrice = getMinSizeFromPizzasSize();
        return minPrice;
    });

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
        updateFinalPrise()
      }, [currentToppingsCost, currentSize]);

      function addSelectedTopping(id){
        if (selectedToppings.hasOwnProperty(id) == false){
            selectedToppings[id] = 1;
        }
        else{
            selectedToppings[id] = selectedToppings[id] + 1;
        }
    }

    function RemoveSelectedTopping(id){
        if (selectedToppings[id] > 0){
            selectedToppings[id] = selectedToppings[id] - 1;
        }

        if (selectedToppings[id] == 0) {
            delete selectedToppings[id];
        }
    }

    function updateFinalPrise(){
        setFinalPrice(getSizePrice(currentSize) + currentToppingsCost)
      }

    function handleCurrentToppingsCost(value){
        setCurrentToppingsCost(value)
    }

    function updateSize(value){
        setSize(value)
    }

    function getMinSizeFromPizzasSize(){
        const price = Math.min(...sizeCosts.map( (item) => item["size"]))

        return price;
    }

    function getSizePrice(currentSize){
        const result =  sizeCosts.find((sizeCost) => sizeCost["size"] == currentSize)

        if (result !== null & result !== undefined) {
            return result["cost"]
        }

        throw new Error('Not found!');
    }

    
    async function onOrderButtonClicked(){
        const body = calculateFinalJson();
        
        try {
            const response = await createOrder(body);
            if (response.ok) {
                console.log('Order placed successfully');
            } else {
                const errorDetails = await response.text();
                console.error('Failed to place order:', response.status, response.statusText, errorDetails);
            }
        } catch (error) {
            console.error('Error placing order:', error);
        }
    }

    function calculateFinalJson() {
        const toppingsArray = Object.entries(selectedToppings).map(([id, count]) => {
            return {
                ToppingId: id,
                Count: count
            };
        });
    
        const result = {
            PizzaId: pizza.id,
            FinalPrise: finalPrice,
            Size: currentSize,
            Toppings: toppingsArray,
            Date: new Date().toISOString()
        };
    
        return result;
    }

return(<div className={styles.pizyPopup__menu__itemsContainer}>
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
                    removeSelected={RemoveSelectedTopping}></ToppingsList>
                </div>

                <div className={styles.pizzaAllIngridients__price}>
                    <span className={styles.pizzaAllIngridients__price__text}>{finalPrice} $</span>
                </div>
                <div className={styles.pizzaAllIngridients__orderButton}>
                    <PinkFadeActionButton clickAction={onOrderButtonClicked}>Order</PinkFadeActionButton>
                </div>
</div>)
    
}

export default OrderSideActorContainer;