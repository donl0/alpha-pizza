import { useEffect, useState } from "react"
import styles from "./BuyPizzaPopup.module.css"
import PizzaAllIngridientsBlock from "./pizzaAllIngridientsBlock/PizzaAllIngridientsBlock"
import { parsePizza } from "../../services/parsePizza"
import { getAllPizzas, getPizzaById } from "../../services/api/pizza"

const BuyPizzaPopup = ({isActive, setPopupState, buyPizzaId}) =>{
    useEffect( () => {
        const setInitialPizzaById = async(id) => {
            let pizza = parsePizza(await getPizzaById(id));
            setCurrentPizza(pizza);
        };

        setInitialPizzaById(buyPizzaId);
    }, [buyPizzaId])

    const [currentPizza, setCurrentPizza] = useState(() => {
        const getFirstPizza = async() => {
            let pizzas = parsePizza(await getAllPizzas());
            return pizzas[0];
        };

        return getFirstPizza();
    });

    function stopNextPropagation(event){
        event.stopPropagation()   
    }

    return (
        <div className={`${styles.pizyPopup__background} ${isActive ? styles.active : ''}`}
        onClick={()=> {
            console.log("clicked");
            
            setPopupState(false);
            }}>
            <div className={styles.pizyPopup__menu} 
            onClick={(event) => {stopNextPropagation(event)}}>
                <div className={styles.pizyPopup__menu__pizzaContainer}>
                    <img src={currentPizza["imagePath"]} className={styles.manImage}></img>
                
                </div>
                <PizzaAllIngridientsBlock pizza={currentPizza}></PizzaAllIngridientsBlock>
            </div>
        </div>
    )
}

export default BuyPizzaPopup;