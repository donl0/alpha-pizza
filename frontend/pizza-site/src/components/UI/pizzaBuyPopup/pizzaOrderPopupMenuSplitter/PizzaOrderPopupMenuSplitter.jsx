import styles from "./PizzaOrderPopupMenuSplitter.module.css"

const PizzaOrderPopupMenuSplitter = ({ImageBlock, orderMenuContent}) => {
    function stopNextPropagation(event){
        event.stopPropagation()   
    }

    return (<div className={styles.pizzaPopup__menu} 
        onClick={(event) => {stopNextPropagation(event)}}>

            <div className={styles.pizzaPopup__imageContainer}>
                <div className={styles.mainImage}>{ImageBlock}</div>
            </div>
            <div className={styles.pizzaPopup__rightSideContainer}>
                {orderMenuContent}
            </div>
            
        </div>
    )
}

export default PizzaOrderPopupMenuSplitter;