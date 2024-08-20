import { useContext, useEffect, useState } from "react";
import { getAllToppings } from "../../../../../services/api/topping";
import { parseToppings } from "../../../../../services/parceTopping";
import ToppingsList from "../../../../buyPizzaPopup/toppingsList/ToppingsList";
import { ToppingsContext, ToppingsCostContext } from "../../../../pizzaOrderPopup/PizzaOrderPopup";

const ToppingListCalculator = () =>{
    const {selectedToppings, setSelectedToppings} = useContext(ToppingsContext);
    const [toppings, setToppings] = useState([]);
    const {currentToppingsCost, setCurrentToppingsCost} = useContext(ToppingsCostContext)

    useEffect(() => {
        const fetchToppings = async () => {
            const fetchedToppings = await getAllToppings();
            const parsedToppings = parseToppings(fetchedToppings);
            setToppings(parsedToppings);
        };

        fetchToppings();
    }, []);

    function handleCurrentToppingsCost(value) {
        setCurrentToppingsCost(value);
    }
    
    function addSelectedTopping(id) {
        setSelectedToppings(prevSelectedToppings => {
            const newSelectedToppings = { ...prevSelectedToppings };
            if (!newSelectedToppings.hasOwnProperty(id)) {
                newSelectedToppings[id] = 1;
            } else {
                newSelectedToppings[id] += 1;
            }
            return newSelectedToppings;
        });

        return true;
    }
    
    function removeSelectedTopping(id) {
        setSelectedToppings(prevSelectedToppings => {
            const newSelectedToppings = { ...prevSelectedToppings };
            if (newSelectedToppings[id] > 0) {
                newSelectedToppings[id] -= 1;
            }

            if (newSelectedToppings[id] === 0) {
                delete newSelectedToppings[id];
            }

            return newSelectedToppings;
        });

        return true;
    }

    return (
        <ToppingsList
                    currentCost={currentToppingsCost}
                    setCurrentCost={handleCurrentToppingsCost}
                    toppings={toppings}
                    addSelected={addSelectedTopping}
                    removeSelected={removeSelectedTopping}
                ></ToppingsList>
    )
}

export default ToppingListCalculator;