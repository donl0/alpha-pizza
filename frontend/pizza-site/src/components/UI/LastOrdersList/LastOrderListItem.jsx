import styles from "./LastOrderListItem.module.css"

const LastOrderListItem = ({image, text, onMouseEnter, onMouseLeave, changeOrder, id}) => {
    const preventDefaultActions = (event) => {
        event.preventDefault();
    };

    const handleMouseEnter = (event) => {
        const { clientX, clientY } = event;
        onMouseEnter(clientX, clientY);
    };

    return (
        <div className={styles.pizzaCardContainer} onMouseLeave={onMouseLeave}
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
                            onMouseEnter={(event)=>{
                                handleMouseEnter(event);
                                changeOrder(id);
                            }}
                            
                            
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