import styles from './OrangeSecondaryActionButton.module.css'

const OrangeSecondaryActionButton = ({onClick, children}) => {

    return (
        <button className={styles.currentButton}
        onClick= { () => {onClick()}
        }>
            <p>{children}</p>
        </button>
    )
}

export default OrangeSecondaryActionButton;

