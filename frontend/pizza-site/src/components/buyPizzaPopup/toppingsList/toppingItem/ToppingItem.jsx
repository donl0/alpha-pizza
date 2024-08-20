import styles from "./ToppingItem.module.css"
import React, { useState } from 'react';

const ToppingItem = ({image, name, price, currentCost, setCurrentCost, id, addSelected, removeSelected}) => {
    const [count, setCount] = useState(0);

    function increase(){
        if (addSelected(id) === true){
          setCount(count + 1);
          setCurrentCost(currentCost + price);
        }
    }

    function decrease(){
        if (count > 0) {
          if (removeSelected == true) {
            setCount(count - 1);
            setCurrentCost(currentCost - price)
            removeSelected(id);
          }
        }
    }

    return (
        <div className={styles.toppingItem__container}>
            <div className={styles.toppingItem__container__imageContainer}>
                <img src={image} className={styles.imageContainer__image}></img>
            </div>
          <div className={styles.toppingItem__textContainer}>
            <span >{name}</span>           
          </div>
          <div className={styles.priseContainer}>
                <span>{price}$</span>
            </div>
          <div className={styles.toppingItem__countContainer}>
            
          <div className={`${styles.counter}`}>
            <div
            className={styles.counter__decreaser}
            onClick={decrease}
            >-</div>

            <span>{count}</span>

            <div 
            className={styles.counter__increaser}
            onClick={increase}
            >+</div>

            </div>
            
          </div>


        </div>
    )
}

export default ToppingItem;