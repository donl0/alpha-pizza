import styles from "./OrderDescribePopup.module.css";

const OrderDescribePopup = ({ position, isActive, order }) => {
    const style = {
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -40%)'
    };

    const hasOrder = order && order.pizza && order.pizza.imagePath;

    return (
        isActive && hasOrder ? (
            <div className={`${styles.container} ${isActive ? styles.active : ''}`} style={style}>
                <div className={styles.toppingsContainer}>
                {order["toppings"].map ((topping, index) => {
                    return (
                    <div key={index} className={styles.toppingsContainer__items}>
                        <img className={styles.container__image} src={topping["topping"]["image"]} alt="product"></img> <span>X {topping["count"]}</span>
                    </div>)
                })}
                </div >
               
                 <div className={styles.text}><span>pizza size: {order["size"]}</span></div>

                 <div><span>order time: {new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></div>
                 <div><span>prise: {order["finalPrise"]} $</span></div>
            </div>
        ) : null
    );
};

export default OrderDescribePopup;
