import PizzaGood from '../pizzaGood/PizzaGood';
import styles from './PizzaGoodList.module.css'

const PizzaGoodList = ({pizzas}) => {
    return (
        <div className={styles.pizzas__generalContainer}>
           
            {pizzas.map( (pizza) => {
                return (
                    <div className={styles.generalContainer__pizzaContainer}>
                        <PizzaGood
                        image={pizza["image"]} 
                        name={pizza["name"]} 
                        prise={pizza["prise"]} 
                        buttonCaption={pizza["buttonCaption"]}
                        ></PizzaGood>
                    </div>
                )
            })}
        
            
           
        </div>
    )
}

export default PizzaGoodList;