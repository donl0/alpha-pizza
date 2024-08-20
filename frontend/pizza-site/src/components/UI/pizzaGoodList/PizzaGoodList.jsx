import PizzaGood from '../pizzaGood/PizzaGood';
import styles from './PizzaGoodList.module.css'

const PizzaGoodList = ({pizzas, onClick, children}) => {
    return (
        <div className={styles.pizzas__generalContainer}>
           <div className={styles.generalContainer__pizzaContainer}>
                        {children}
                    </div>
            {pizzas.map( (pizza, index) => {
                return (
                    <div key={index} className={styles.generalContainer__pizzaContainer}>
                        <PizzaGood
                        image={pizza["imagePath"]} 
                        name={pizza["name"]} 
                        price={pizza["price"]} 
                        buttonCaption={pizza["buttonCaption"]}
                        onClick={() => onClick(pizza["id"])}
                        id={pizza["id"]}
                        ></PizzaGood>
                    </div>
                )
            })}
        </div>
    )
}

export default PizzaGoodList;