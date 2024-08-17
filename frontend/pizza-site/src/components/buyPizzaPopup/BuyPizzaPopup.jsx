import styles from "./BuyPizzaPopup.module.css"
import PizzaAllIngridientsBlock from "./pizzaAllIngridientsBlock/PizzaAllIngridientsBlock"

const BuyPizzaPopup = ({isActive, setPopupState}) =>{
    function stopNextPropagation(event){
        event.stopPropagation()   
    }

    return (
        <div className={`${styles.pizyPopup__background} ${isActive ? styles.active : ''}`}
        onClick={()=> {setPopupState(false)}}>
            <div className={styles.pizyPopup__menu} 
            onClick={(event) => {stopNextPropagation(event)}}>
                <div className={styles.pizyPopup__menu__pizzaContainer}>
                    <img src="/images/pizzas/custom_pizza.svg" className={styles.manImage}></img>
                </div>
                <PizzaAllIngridientsBlock></PizzaAllIngridientsBlock>
            </div>
        </div>
    )
}

export default BuyPizzaPopup;