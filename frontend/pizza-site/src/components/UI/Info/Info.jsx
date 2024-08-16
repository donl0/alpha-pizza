import styles from './Info.module.css';

const Info = ({imagePath, mainText, secondaryText}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={imagePath} alt='info'></img>
            </div>
            <div className={styles.info_textContainer}>
                <span className={styles.info__mainText}>{mainText}</span>
                <p></p>
                <span className={styles.info__secondaryText}>{secondaryText}</span>
            </div>
            
        </div>
    )
}

export default Info;