import Info from "../Info/Info"

const InfoRendererList = ({items, containerClasses}) => {
    return (
        <div className={containerClasses}>
            {items.map( ((item, key) => {
            return (
                <Info key={key} imagePath={item["imageParh"]} mainText={item["mainText"]} secondaryText={item["secondaryText"]}>
                </Info>
            )
        }))}
        </div>
    )    
}

export default InfoRendererList;