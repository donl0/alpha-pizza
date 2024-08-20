import DefaultOrderPizzaMenu from "../orderPizzaMenuTypes/defaultOrderPizzaMenu/DefaultOrderPizzaMenu";
import CustomPopup from "../UI/customPopup/CustomPopup";
import styles from "./PizzaOrderPopup.module.css";

const PizzaOrderPopup = ({ isActive, setPopupState, action, pizzaId }) => {
  if (!isActive) {
    return <div></div>;
  }

  return (
    <CustomPopup isActive={isActive} setPopupState={setPopupState}>
      {action === "default" ? (
        <DefaultOrderPizzaMenu pizzaId={pizzaId} />
      ) : action === "custom" ? (
        <div>Custom order menu</div>
      ) : null}
    </CustomPopup>
  );
};

export default PizzaOrderPopup;
