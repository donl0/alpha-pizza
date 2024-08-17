import BuyPizzaPopup from "../buyPizzaPopup/BuyPizzaPopup";
import PizzaGoodList from "../UI/pizzaGoodList/PizzaGoodList";
import styles from './Menu.module.css';
import React, { useState } from 'react';

const pizzas = [{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Builed pizza by yourself",
    prise: "11",
    buttonCaption: "Builed"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
}
]

const Menu = () => {
    const [isPopupActive, setPopupState] = useState(false);

    const handlePopupOpen = () => {
        setPopupState(true);
    };

    return (
        <div className={styles.container}>
            <PizzaGoodList pizzas={pizzas} onClick={handlePopupOpen}></PizzaGoodList>
            <BuyPizzaPopup isActive={isPopupActive} setPopupState={setPopupState}></BuyPizzaPopup>
        </div>
    )
}

export default Menu;