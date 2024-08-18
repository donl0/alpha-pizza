import styles from './PinkFadeActionButton.module.css'

const PinkFadeActionButton = ({clickAction, children}) => {

    return (
        <button className={styles.curentButton} onClick={()=> clickAction()}>
            <p>{children}</p>
        </button>
    )
}

export default PinkFadeActionButton;