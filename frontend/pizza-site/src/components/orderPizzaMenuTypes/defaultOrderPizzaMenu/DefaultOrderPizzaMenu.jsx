import { createOrder } from "../../../services/api/order";
import { getAllPizzas, getPizzaById } from "../../../services/api/pizza";
import { parsePizza } from "../../../services/parsePizza";
import { CurrentSizeContext, PriseContext, ToppingsContext } from "../../pizzaOrderPopup/PizzaOrderPopup";
import OrderSideActorContainer from "../../UI/pizzaBuyPopup/orderSideActorContainer/OrderSideActorContainer";
import PizzaOrderPopupMenuSplitter from "../../UI/pizzaBuyPopup/pizzaOrderPopupMenuSplitter/PizzaOrderPopupMenuSplitter";
import PizzaInfoBlock from "../../UI/pizzaInfoBlock/PizzaInfoBlock";
import style from "./DefaultOrderPizzaMenu.module.css"
import { createContext, useContext, useEffect, useState } from "react"



const DefaultOrderPizzaMenu = ({pizzaId}) => {
    const {selectedToppings, setSelectedToppings} = useContext(ToppingsContext);
    const {finalPrise, setFinalPrise} = useContext(PriseContext);
    const {currentSize, setCurrentSize} = useContext(CurrentSizeContext)

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
    
    async function onOrderButtonClicked(){
        const body = calculateFinalJson();
        
        try {
            const response = await createOrder(body);
            if (response.ok) {
                console.log('Order placed successfully');
            } else {
                const errorDetails = await response.text();
                console.error('Failed to place order:', response.status, response.statusText, errorDetails);
            }
        } catch (error) {
            console.error('Error placing order:', error);
        }
    }

    function calculateFinalJson() {
        const toppingsArray = Object.entries(selectedToppings).map(([id, count]) => {
            return {
                ToppingId: id,
                Count: count
            };
        });
    
        const result = {
            PizzaId: pizzaId,
            FinalPrise: finalPrise,
            Size: currentSize,
            Toppings: toppingsArray,
            Date: new Date().toISOString()
        };
    
        return result;
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
                costs={currentPizza["sizeCosts"].map( (item) => item["size"])}
                onOrderButtonClicked={onOrderButtonClicked}/>}></PizzaOrderPopupMenuSplitter>

        </div>
    )
}

export default DefaultOrderPizzaMenu;