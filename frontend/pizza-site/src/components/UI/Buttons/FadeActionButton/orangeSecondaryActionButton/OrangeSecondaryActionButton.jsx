import styles from './OrangeSecondaryActionButton.module.css'

const OrangeSecondaryActionButton = ({children}) => {

    return (
        <button className={styles.currentButton}>
            <p>{children}</p>
        </button>
    )
}

export default OrangeSecondaryActionButton;

