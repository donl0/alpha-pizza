import styles from "./SimpleImageBlock.module.css"

const SimpleImageBlock = ({image}) => {
    return (<img src={image} className={styles.imageContainer}></img>)
}

export default SimpleImageBlock;