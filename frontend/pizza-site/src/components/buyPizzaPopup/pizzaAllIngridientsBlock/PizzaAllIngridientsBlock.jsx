import PizzaInfoBlock from '../../UI/pizzaInfoBlock/PizzaInfoBlock';
import CustomSelect from '../../UI/Select/CustomSelect';
import ToppingsList from '../toppingsList/ToppingsList';
import styles from './pizzaAllIngridientsBlock.module.css';
import React, { useState } from 'react';

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

const sizes = [20,25,35]

const PizzaAllIngridientsBlock = () => {
    const [size, setSize] = useState(0);

    return (
        <div className={styles.pizyPopup__menu__itemsContainer}>
                    <PizzaInfoBlock name={pizza["name"]}
                    consistOf={pizza["consistOf"]}></PizzaInfoBlock>
                    <CustomSelect items={sizes} currentChoosen={size} setCurrent={setSize}></CustomSelect>
                    <div className={styles.pizzaAllIngridients__toppingsList}>
                        <ToppingsList></ToppingsList>
                    </div>
                </div>
    )
}

export default PizzaAllIngridientsBlock;