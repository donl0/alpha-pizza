import styles from './OrangeCaption.module.css'

const OrangeCaption = ({children}) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default OrangeCaption;