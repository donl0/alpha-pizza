import { getAllPizzas, getPizzaById } from "../../../services/api/pizza";
import { parsePizza } from "../../../services/parsePizza";
import OrderSideActorContainer from "../../UI/pizzaBuyPopup/orderSideActorContainer/OrderSideActorContainer";
import PizzaOrderPopupMenuSplitter from "../../UI/pizzaBuyPopup/pizzaOrderPopupMenuSplitter/PizzaOrderPopupMenuSplitter";
import PizzaInfoBlock from "../../UI/pizzaInfoBlock/PizzaInfoBlock";
import style from "./DefaultOrderPizzaMenu.module.css"
import { useEffect, useState } from "react"

const DefaultOrderPizzaMenu = ({pizzaId}) => {
    useEffect( () => {
        const setPizzaOnChange = async(id) => {
            let pizza = parsePizza([await getPizzaById(id)])[0];
            setCurrentPizza(pizza);
        };

        setPizzaOnChange(pizzaId);
    }, [pizzaId])

    const [currentPizza, setCurrentPizza] = useState([]);

    if (currentPizza.length == 0 || !currentPizza) {
        return <div></div>
    }

    return (
        <div>
            <PizzaOrderPopupMenuSplitter
            image={currentPizza["imagePath"]}
            orderMenuContent={<OrderSideActorContainer 
                header={<PizzaInfoBlock name={currentPizza["name"]}
                                        consistOf={currentPizza["consistOf"]}
                                        />}
                                        sizeCosts={currentPizza["sizeCosts"]}
                costs={currentPizza["sizeCosts"].map( (item) => item["size"])}/>}></PizzaOrderPopupMenuSplitter>
        </div>
    )
}

export default DefaultOrderPizzaMenu;