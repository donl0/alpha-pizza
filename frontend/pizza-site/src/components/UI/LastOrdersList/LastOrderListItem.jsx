import styles from "./LastOrderListItem.module.css"

const LastOrderListItem = ({image, text, onMouseEnter, onMouseLeave}) => {
    const preventDefaultActions = (event) => {
        event.preventDefault();
    };

    const handleMouseEnter = (event) => {
        const { clientX, clientY } = event;
        onMouseEnter(clientX, clientY);
    };

    return (
        <div className={styles.pizzaCardContainer}
        >
                    <div className={styles.pizzaCardContainer__pizzaCard} 
                    onMouseDown={preventDefaultActions} 
                    onDragStart={preventDefaultActions} 
                    onContextMenu={preventDefaultActions}>
                        <img
                            src={image}
                            alt="pizza"
                            className={styles.pizzaCardContainer__pizzaCard__image}
                            draggable="false"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={onMouseLeave}
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