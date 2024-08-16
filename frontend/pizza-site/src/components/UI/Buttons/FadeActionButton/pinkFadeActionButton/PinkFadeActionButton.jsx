import styles from './PinkFadeActionButton.module.css'

const PinkFadeActionButton = ({children}) => {

    return (
        <button className={styles.curentButton}>
            <p>{children}</p>
        </button>
    )
}

export default PinkFadeActionButton;