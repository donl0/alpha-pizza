import { createOrder } from '../../../services/api/order';
import { getAllToppings } from '../../../services/api/topping';
import { parseToppings } from '../../../services/parceTopping';
import PinkFadeActionButton from '../../UI/Buttons/FadeActionButton/pinkFadeActionButton/PinkFadeActionButton';
import PizzaInfoBlock from '../../UI/pizzaInfoBlock/PizzaInfoBlock';
import CustomSelect from '../../UI/Select/CustomSelect';
import ToppingsList from '../toppingsList/ToppingsList';
import styles from './pizzaAllIngridientsBlock.module.css';
import React, { useState, useEffect } from 'react';

let selectedToppings = {};

const PizzaAllIngridientsBlock = ({pizza}) => {
    const [finalPrice, setFinalPrice] = useState(0);
    const [currentToppingsCost, setCurrentToppingsCost] = useState(0);
    const [currentSize, setSize] = useState(null);

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
        if (pizza) {
            const minPrice = getMinSizeFromPizzasSize(pizza);
            setSize(minPrice);
        }
    }, [pizza]);
    
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
        if (!pizza || !pizza.sizeCosts) {
            return
        }

        setFinalPrice(getSizePrice(currentSize) + currentToppingsCost)
      }

    function handleCurrentToppingsCost(value){
        setCurrentToppingsCost(value)
    }

    function updateSize(value){
        setSize(value)
    }

    function getMinSizeFromPizzasSize(pizza){
        if (!pizza || !pizza.sizeCosts) {
            return [];
        }

        const price = Math.min(...pizza["sizeCosts"].map( (item) => item["size"]))

        return price;
    }

    function getSizePrice(currentSize){
        const result =  pizza["sizeCosts"].find((sizeCost) => sizeCost["size"] == currentSize)

        if (result !== null) {
            return result["cost"]
        }

        throw new Error('Not found!');
    }

    if (!pizza || !pizza.sizeCosts) {
        return <div>Loading...</div>;
    }

    async function onOrderButtonClicked(){
        const body = calculateFinalJson();

        console.log(body);
        
        try {
            const response = await createOrder(body);
            if (response.ok) {
                console.log('Order placed successfully');
            } else {
                // Логирование ошибки с подробным описанием
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

    return (
        <div className={styles.pizyPopup__menu__itemsContainer}>
                    <PizzaInfoBlock name={pizza["name"]}
                    consistOf={pizza["consistOf"]}></PizzaInfoBlock>

                    <div className={styles.pizzaAllIngridients__customSelect}>
                        <CustomSelect items={pizza["sizeCosts"].map( (item) => item["size"])} currentChoosen={currentSize} setCurrent={updateSize}></CustomSelect>
                    </div>

                    <div className={styles.pizzaAllIngridients__toppingsList}>
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
                </div>
    )
}

export default PizzaAllIngridientsBlock;