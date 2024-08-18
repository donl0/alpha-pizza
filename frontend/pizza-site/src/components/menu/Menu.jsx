import { getAllPizzas } from "../../services/api/pizza";
import { parsePizzasForMenu } from "../../services/parsePizza";
import BuyPizzaPopup from "../buyPizzaPopup/BuyPizzaPopup";
import PizzaGoodList from "../UI/pizzaGoodList/PizzaGoodList";
import styles from './Menu.module.css';
import React, { useEffect, useState } from 'react';

const Menu = () => {
    useEffect( () => {
        const getPizzas = async() => {
            
            let pizzas = parsePizzasForMenu(await getAllPizzas());
            setPizzas(pizzas);
        };

        getPizzas();
    }, [])

    const [pizzas, setPizzas] = useState([]);
    const [isPopupActive, setPopupState] = useState(false);

    const [buyPizzaId, setbuyPizzaId] = useState(() => {
        const getFirstPizza = async() => {
            let pizzas = parsePizzasForMenu(await getAllPizzas());
            return pizzas[0]["id"];
        };

        return getFirstPizza();
    });

    const handleOpenBuyPizzaMenu = (pizzaId) => {
        setbuyPizzaId(pizzaId)
        setPopupState(true);
    };

    return (
        <div className={styles.container}>
            <PizzaGoodList pizzas={pizzas} onClick={handleOpenBuyPizzaMenu}></PizzaGoodList>
            <BuyPizzaPopup isActive={isPopupActive} 
            setPopupState={setPopupState}
            buyPizzaId={buyPizzaId}></BuyPizzaPopup>
        </div>
    )
}

export default Menu;