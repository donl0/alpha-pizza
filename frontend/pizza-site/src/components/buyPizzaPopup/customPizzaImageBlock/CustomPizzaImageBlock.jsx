import { useEffect, useState } from "react";
import SeveralPicturesAtOneBlock from "../../UI/pizzaBuyPopup/pizzaOrderPopupMenuSplitter/imagesBlockes/severalPicturesAtOneBlock/SeveralPicturesAtOneBlock";
import styles from "./CustomPizzaImageBlock.module.css"
import { getPizzaWithImagesById } from "../../../services/api/pizzaParts";
const CustomPizzaImageBlock = ({pizzaIds}) => {
    const [images, setImages] = useState([])

    useEffect( () => {
        async function setImagesFromPizzaIds(){
            const imagesArray = [];

            for (let index = 0; index < pizzaIds.length; index++) {
                const pizzaId = pizzaIds[index];
                if (pizzaId !== null) {
                    const pizzaData = await getPizzaWithImagesById(pizzaId);

                    imagesArray.push(pizzaData.images[index])
                }
               
            }
            setImages(imagesArray);
        }

        setImagesFromPizzaIds();
    }, [pizzaIds])

    return (<div>
        <SeveralPicturesAtOneBlock images={images}></SeveralPicturesAtOneBlock>

    </div>)
}

export default CustomPizzaImageBlock;