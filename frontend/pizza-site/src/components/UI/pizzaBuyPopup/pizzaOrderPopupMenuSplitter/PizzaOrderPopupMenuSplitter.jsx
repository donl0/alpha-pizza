import styles from "./PizzaOrderPopupMenuSplitter.module.css"

const PizzaOrderPopupMenuSplitter = ({image, orderMenuContent}) => {
    function stopNextPropagation(event){
        event.stopPropagation()   
    }

    return (<div className={styles.pizzaPopup__menu} 
        onClick={(event) => {stopNextPropagation(event)}}>

            <div className={styles.pizzaPopup__imageContainer}>
                <img src={image} className={styles.mainImage}></img>
            </div>
            <div className={styles.pizzaPopup__rightSideContainer}>
                {orderMenuContent}
            </div>
            
        </div>
    )
}

export default PizzaOrderPopupMenuSplitter;