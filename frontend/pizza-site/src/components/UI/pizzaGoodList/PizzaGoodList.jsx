import PizzaGood from '../pizzaGood/PizzaGood';
import styles from './PizzaGoodList.module.css'

const PizzaGoodList = ({pizzas, onClick}) => {
    return (
        <div className={styles.pizzas__generalContainer}>
           
            {pizzas.map( (pizza, key) => {
                return (
                    <div key={key} className={styles.generalContainer__pizzaContainer}>
                        <PizzaGood
                        image={pizza["image"]} 
                        name={pizza["name"]} 
                        prise={pizza["prise"]} 
                        buttonCaption={pizza["buttonCaption"]}
                        onClick={onClick}
                        ></PizzaGood>
                    </div>
                )
            })}
        
            
           
        </div>
    )
}

export default PizzaGoodList;