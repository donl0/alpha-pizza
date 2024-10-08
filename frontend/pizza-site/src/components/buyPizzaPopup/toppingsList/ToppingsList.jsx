import ToppingItem from "./toppingItem/ToppingItem";
import styles from "./ToppingsList.module.css"

const ToppingsList = ({currentCost, setCurrentCost, toppings, addSelected, removeSelected}) => {
    return (
        <div>
            <span className={styles.toppingItem__name}>Toppings</span>
            <div className={styles.toppings__toppingsContainer}>
                {toppings.map( (topping, index) => {
                    return (
                        <ToppingItem key={index}
                        image={topping["image"]}
                        name={topping["name"]}
                        price={topping["price"]}
                        currentCost={currentCost}
                        setCurrentCost={setCurrentCost}
                        id={topping["id"]}
                        addSelected={addSelected}
                        removeSelected={removeSelected}>
                        </ToppingItem>
                    )
                })}
                
            </div>
        </div>
    )
}

export default ToppingsList;