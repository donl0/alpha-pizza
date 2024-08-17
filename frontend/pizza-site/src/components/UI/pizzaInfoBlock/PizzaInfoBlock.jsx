import styles from "./PizzaInfoBlock.module.css"

const PizzaInfoBlock = ({name, consistOf}) => {
    return (
        <div>
            <div>
                <span className={styles.pizzaInfoBlock__name}>{name}</span>
            </div>
        <div >
        {consistOf.map((item, index) => (
                    <span key={index} className={styles.pizzaInfoBlock__ingridients}>
                        {item}
                        {index + 1 !== consistOf.length && <span>, </span>}
                    </span>
                ))}
        </div>
        </div>
    )
        
}

export default PizzaInfoBlock;