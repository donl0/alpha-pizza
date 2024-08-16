import PizzaGoodList from "../UI/pizzaGoodList/PizzaGoodList";
import styles from './Menu.module.css';

const pizzas = [{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Builed pizza by yourself",
    prise: "11",
    buttonCaption: "Builed"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
},
{
    image: "/images/pizzas/custom_pizza.svg",
    name: "Pepperoni",
    prise: "13",
    buttonCaption: "Order"
}
]

const Menu = () => {
    return (
        <div className={styles.container}>
            <PizzaGoodList pizzas={pizzas}></PizzaGoodList>
        </div>
    )
}

export default Menu;