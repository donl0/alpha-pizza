import styles from "./CustomPopup.module.css"

const CustomPopup = ({isActive, setPopupState, children}) => {

    return (
        <div className={`${styles.pizzaPopup__background} ${isActive ? styles.active : ''}`}
        onClick={()=> {
            setPopupState(false);
            }}>
            {children}
        </div>
    )
}

export default CustomPopup;