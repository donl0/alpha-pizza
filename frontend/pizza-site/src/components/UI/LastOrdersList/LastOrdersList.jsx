import styles from "./LastOrdersList.module.css"
import React, { useRef } from "react";

const LastOrdersList = ({pizzas}) => {
    const containerRef = useRef(null);

    const handleWheel = (event) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += event.deltaY/3;
        }
    };

    const preventDefaultActions = (event) => {
        event.preventDefault();
    };
      
    return (
        <div 
            className={styles.lastOrderList__container} 
            onWheel={handleWheel} 
            ref={containerRef}
        >
            {pizzas.map((pizza, index) => (
                <div key={index} className={styles.pizzaCardContainer}>
                    <div className={styles.pizzaCardContainer__pizzaCard} 
                    onMouseDown={preventDefaultActions} 
                    onDragStart={preventDefaultActions} 
                    onContextMenu={preventDefaultActions}>
                        <img
                            src={pizza["image"]}
                            alt="pizza"
                            className={styles.pizzaCardContainer__pizzaCard__image}
                            draggable="false"
                        />
                    </div>
                    <div className={styles.pizzaCardContainer__textContainer}
                    onMouseDown={preventDefaultActions} 
                    onDragStart={preventDefaultActions} 
                    onContextMenu={preventDefaultActions}>
                        <span>{pizza["name"]}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LastOrdersList;