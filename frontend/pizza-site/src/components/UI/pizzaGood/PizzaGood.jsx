import styles from "./PizzaGood.module.css"
import OrangeSecondaryActionButton from "../Buttons/FadeActionButton/orangeSecondaryActionButton/OrangeSecondaryActionButton"

const PizzaGood = ({image, name, prise, buttonCaption, id}) => {
    return (
        <div className={styles.pizzaGood__container}>
            <div className={styles.pizzaGood__container__image}>
                <img src={image} className={styles.pizzaGood__image}></img>
            </div>
            <span className={styles.pizzaGood__mainText}>{name}</span>
                
                <div className={styles.pizzaGood__bottomLineContainer}>
                    <span className={styles.pizzaGood__prise}>from {prise}$</span>
                    <OrangeSecondaryActionButton>{buttonCaption}</OrangeSecondaryActionButton>
                </div>
            
        </div>
    )
}

export default PizzaGood;