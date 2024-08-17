import styles from "./CustomSelect.module.css"

const CustomSelect = ({items, currentChoosen, setCurrent}) => {
    return (
        <div className={styles.customSelect__container}>
            {items.map((item, index) => (
                <div 
                    key={index} 
                    className={styles.container__item}
                    onClick={() => setCurrent(item)}
                >
                    <div 
                        className={`${styles.customSelect_background} ${item === currentChoosen ? styles.customSelect_background_active : ''}`}
                    >
                        {item} cm
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CustomSelect;
