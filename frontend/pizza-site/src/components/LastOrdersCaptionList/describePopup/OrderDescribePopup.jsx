import styles from "./OrderDescribePopup.module.css";

const OrderDescribePopup = ({ position, isActive }) => {
    const style = {
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -20%)'
    };

    return (
        isActive ? (
            <div className={`${styles.container} ${isActive ? styles.active : ''}`} style={style}>
                
            </div>
        ) : null
    );
};

export default OrderDescribePopup;
