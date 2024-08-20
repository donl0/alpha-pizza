import { createContext, useState } from "react";
import DefaultOrderPizzaMenu from "../orderPizzaMenuTypes/defaultOrderPizzaMenu/DefaultOrderPizzaMenu";
import CustomPopup from "../UI/customPopup/CustomPopup";
import styles from "./PizzaOrderPopup.module.css";

export const PriseContext = createContext();
export const ToppingsContext = createContext();
export const CurrentSizeContext = createContext();
export const ToppingsCostContext = createContext();

const PizzaOrderPopup = ({ isActive, setPopupState, action, pizzaId }) => {
  const [finalPrise, setFinalPrise] = useState(0);
  const [selectedToppings, setSelectedToppings ] = useState({});
  const [currentSize, setCurrentSize ] = useState();
  const [currentToppingsCost, setCurrentToppingsCost] = useState(0);

  if (!isActive) {
    return <div></div>;
  }

  return (
    <PriseContext.Provider value = {{finalPrise, setFinalPrise}}>
    <ToppingsContext.Provider value={{selectedToppings, setSelectedToppings}}>
    <CurrentSizeContext.Provider value = {{currentSize, setCurrentSize}}>
      <ToppingsCostContext.Provider value={{currentToppingsCost, setCurrentToppingsCost}}>
          <CustomPopup isActive={isActive} setPopupState={setPopupState}>
              {action === "default" ? (
                <DefaultOrderPizzaMenu pizzaId={pizzaId} />
              ) : action === "custom" ? (
                <div>Custom order menu</div>
              ) : null}
            </CustomPopup>
          </ToppingsCostContext.Provider>
        </CurrentSizeContext.Provider>
        </ToppingsContext.Provider>
      </PriseContext.Provider>

  );
};

export default PizzaOrderPopup;
