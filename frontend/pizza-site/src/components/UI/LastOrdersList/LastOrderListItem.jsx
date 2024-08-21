import styles from "./LastOrderListItem.module.css"

const LastOrderListItem = ({image, text}) => {
    const preventDefaultActions = (event) => {
        event.preventDefault();
    };

    return (
        <div className={styles.pizzaCardContainer}>
                    <div className={styles.pizzaCardContainer__pizzaCard} 
                    onMouseDown={preventDefaultActions} 
                    onDragStart={preventDefaultActions} 
                    onContextMenu={preventDefaultActions}>
                        <img
                            src={image}
                            alt="pizza"
                            className={styles.pizzaCardContainer__pizzaCard__image}
                            draggable="false"
                        />
                    </div>
                    <div className={styles.pizzaCardContainer__textContainer}
                    onMouseDown={preventDefaultActions} 
                    onDragStart={preventDefaultActions} 
                    onContextMenu={preventDefaultActions}>
                        <span>{text}</span>
                    </div>
                </div>
    )
}

export default LastOrderListItem;