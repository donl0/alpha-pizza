import PizzaInfoBlock from "../UI/pizzaInfoBlock/PizzaInfoBlock"
import styles from "./BuyPizzaPopup.module.css"

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
                <div className={styles.pizyPopup__menu__itemsContainer}>
                    <PizzaInfoBlock name={pizza["name"]}
                    consistOf={pizza["consistOf"]}></PizzaInfoBlock>
                </div>
            </div>
        </div>
    )
}

export default BuyPizzaPopup;