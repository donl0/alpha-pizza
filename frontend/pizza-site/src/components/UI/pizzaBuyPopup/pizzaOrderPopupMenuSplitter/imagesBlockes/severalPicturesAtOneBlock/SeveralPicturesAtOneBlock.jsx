import styles from "./SeveralPicturesAtOneBlock.module.css"

const SeveralPicturesAtOneBlock = ({images}) => {
    return (
        <div>
            {images.map( (image, index) => {
                return (<img key={index} src={image} className={styles.severalPictures__image}></img>)
            })}
        </div>
    )
}

export default SeveralPicturesAtOneBlock;