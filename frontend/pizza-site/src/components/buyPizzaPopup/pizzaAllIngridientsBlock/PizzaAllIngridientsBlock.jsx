import { getAllToppings } from '../../../services/api/topping';
import { parseToppings } from '../../../services/parceTopping';
import PinkFadeActionButton from '../../UI/Buttons/FadeActionButton/pinkFadeActionButton/PinkFadeActionButton';
import PizzaInfoBlock from '../../UI/pizzaInfoBlock/PizzaInfoBlock';
import CustomSelect from '../../UI/Select/CustomSelect';
import ToppingsList from '../toppingsList/ToppingsList';
import styles from './pizzaAllIngridientsBlock.module.css';
import React, { useState, useEffect } from 'react';

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
                        toppings={toppings}></ToppingsList>
                    </div>
                    <div className={styles.pizzaAllIngridients__price}>
                        <span className={styles.pizzaAllIngridients__price__text}>{finalPrice} $</span>
                    </div>
                    <div className={styles.pizzaAllIngridients__orderButton}>
                        <PinkFadeActionButton>Order</PinkFadeActionButton>

                    </div>
                </div>
    )
}

export default PizzaAllIngridientsBlock;