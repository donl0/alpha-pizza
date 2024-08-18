import styles from "./PizzaGood.module.css"
import OrangeSecondaryActionButton from "../Buttons/FadeActionButton/orangeSecondaryActionButton/OrangeSecondaryActionButton"

const PizzaGood = ({image, name, price, buttonCaption, id, onClick}) => {
    return (
        <div className={styles.pizzaGood__container}>
            <div className={styles.pizzaGood__container__image}>
                <img src={image} className={styles.pizzaGood__image}></img>
            </div>
            <span className={styles.pizzaGood__mainText}>{name}</span>
                
                <div className={styles.pizzaGood__bottomLineContainer}>
                    <span className={styles.pizzaGood__prise}>from {price}$</span>
                    <OrangeSecondaryActionButton onClick={onClick}>{buttonCaption}</OrangeSecondaryActionButton>
                </div>
            
        </div>
    )
}

export default PizzaGood;