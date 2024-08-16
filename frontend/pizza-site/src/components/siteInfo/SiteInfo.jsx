import Info from "../UI/Info/Info";
import InfoRendererList from "../UI/infoRendererList/InfoRendererList";
import styles from "./SiteInfo.module.css"

const SiteInfo = () =>{
    const renderItemsFirstRow = [{
        imageParh: "/images/info/strange_pizza.jpg",
        mainText: "Builed your own pizza",
        secondaryText: "You can choose ingridients you want. Over hundreds chevs hard working everyday prototyping new flavors."
    },
    {
        imageParh: "/images/info/cat_on_pizza.png",
        mainText: "Add your design",
        secondaryText: "We have artists that will draw any art you want. You even can draw it by yourself with our tool."
    }
]

const renderItemsSecondRow = [{
    imageParh: "/images/info/beer_with_pizza.jpg",
    mainText: "Beer also important",
    secondaryText: "We have agreements with the most popular suppliers."
}
]

    return (
        <div>
            <div className={styles.container}>
                <InfoRendererList items={renderItemsFirstRow} containerClasses={styles.siteInfOContainer}></InfoRendererList>
                <img src="/images/info/pizza_man_what.png" className={styles.manImage}></img>
            </div>
            <div className={styles.container}>
                <InfoRendererList items={renderItemsSecondRow} containerClasses={styles.siteInfOSecondContainer}></InfoRendererList>
                <img src="/images/info/pizza_man_running.png" className={styles.manImage}></img>
            </div>
        </div>
        
        
    )
}

export default SiteInfo;