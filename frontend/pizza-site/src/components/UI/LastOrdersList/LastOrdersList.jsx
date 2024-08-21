import LastOrderListItem from "./LastOrderListItem";
import styles from "./LastOrdersList.module.css"
import React, { useEffect, useRef } from "react";

const LastOrdersList = ({pizzas}) => {
    const containerRef = useRef(null);

    const handleWheel = (event) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += event.deltaY/3;

            event.preventDefault();
        }
    };

    useEffect(() => {
        const preventPageScroll = (event) => {
            if (containerRef.current && containerRef.current.contains(event.target)) {
                event.preventDefault();
            }
        };

        window.addEventListener("wheel", preventPageScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", preventPageScroll);
        };
    }, []);

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
                <LastOrderListItem key={index}
                image={pizza["pizza"]["imagePath"]}
                text={pizza["pizza"]["name"]}>

                </LastOrderListItem>
            ))}
        </div>
    );
};

export default LastOrdersList;