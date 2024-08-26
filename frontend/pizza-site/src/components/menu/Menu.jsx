import { getAllPizzas } from "../../services/api/pizza";
import { parsePizzasForMenu } from "../../services/parsePizza";
import PizzaOrderPopup from "../pizzaOrderPopup/PizzaOrderPopup";
import PizzaGood from "../UI/pizzaGood/PizzaGood";
import PizzaGoodList from "../UI/pizzaGoodList/PizzaGoodList";
import styles from './Menu.module.css';
import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Menu = () => {
    useEffect( () => {
        const getPizzas = async() => {
            
            let pizzas = parsePizzasForMenu(await getAllPizzas());
            setPizzas(pizzas);
        };

        getPizzas();
    }, [])

    const [pizzas, setPizzas] = useState([]);
    const [currentAction, setSurrentAction] = useState([]);

    const [isPopupActive, setPopupState] = useState(false);

    const [buyPizzaId, setbuyPizzaId] = useState(() => {
        const getFirstPizza = async() => {
            let pizzas = parsePizzasForMenu(await getAllPizzas());
            return pizzas[0]["id"];
        };

        return getFirstPizza();
    });

    const handleOpenBuyPizzaMenu = (pizzaId) => {
        setSurrentAction("default")
        setbuyPizzaId(pizzaId)
        setPopupState(true);
    };

    const makeCustomOpenBuyPizzaMenu = () => {
        setSurrentAction("custom")
        setPopupState(true);
    };

    const successfulOrdered = () => toast.success('🍕 Ordered successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });;

    return (
        <div className={styles.container}>
            <PizzaGoodList pizzas={pizzas} onClick={handleOpenBuyPizzaMenu}>
            <PizzaGood
                        image={"/images/pizzas/custom_pizza.svg"} 
                        name={"Build your!"} 
                        price={"9"} 
                        buttonCaption={"Build"}
                        onClick={makeCustomOpenBuyPizzaMenu}
                        id={null}
                        ></PizzaGood>
            </PizzaGoodList>
        
            <PizzaOrderPopup
            isActive={isPopupActive} 
            setPopupState={setPopupState}
            action={currentAction}
            pizzaId={buyPizzaId}
            onSuccessfulOrdered={successfulOrdered}></PizzaOrderPopup>    
            <ToastContainer />

        </div>
    )
}

export default Menu;