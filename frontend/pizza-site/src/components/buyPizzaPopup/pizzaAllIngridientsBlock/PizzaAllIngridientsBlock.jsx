import PinkFadeActionButton from '../../UI/Buttons/FadeActionButton/pinkFadeActionButton/PinkFadeActionButton';
import PizzaInfoBlock from '../../UI/pizzaInfoBlock/PizzaInfoBlock';
import CustomSelect from '../../UI/Select/CustomSelect';
import ToppingsList from '../toppingsList/ToppingsList';
import styles from './pizzaAllIngridientsBlock.module.css';
import React, { useState, useEffect } from 'react';

const pizza = {
    name: "Pizza Picanta with feta",
    consistOf: ["Ham", "feta cheese", "champignons", "red onion", "arugula", "mozzarella cheese", "tomato sauce"],
    sizes: [{
        size: 23,
        cost: 500,
    },
    {
        size:30,
        cost:655
    },
    {size:36,
        cost:800
    }]
}

const sizes = [23,30,36]

const PizzaAllIngridientsBlock = () => {

    const [finalPrice, setFinalPrice] = useState(0);
    const [currentToppingsCost, setCurrentToppingsCost] = useState(0);
    const [currentSize, setSize] = useState(sizes[0]);

    useEffect(() => {
        updateFinalPrise()
      }, [currentToppingsCost, currentSize]);


    function updateFinalPrise(){
        setFinalPrice(getSizePrice(currentSize) + currentToppingsCost)
      }

    function handleCurrentToppingsCost(value){
        setCurrentToppingsCost(value)
    }

    function updateSize(value){
        setSize(value)
    }

    function getSizePrice(currentSize){
        const result =  pizza["sizes"].find((sizeCost) => sizeCost["size"] == currentSize)

        if (result !== null) {
            return result["cost"]
        }

        throw new Error('Not found!');
    }

    return (
        <div className={styles.pizyPopup__menu__itemsContainer}>
                    <PizzaInfoBlock name={pizza["name"]}
                    consistOf={pizza["consistOf"]}></PizzaInfoBlock>

                    <div className={styles.pizzaAllIngridients__customSelect}>
                        <CustomSelect items={sizes} currentChoosen={currentSize} setCurrent={updateSize}></CustomSelect>
                    </div>

                    <div className={styles.pizzaAllIngridients__toppingsList}>
                        <ToppingsList
                        currentCost={currentToppingsCost}
                        setCurrentCost={handleCurrentToppingsCost}></ToppingsList>
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