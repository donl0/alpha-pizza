import ToppingItem from "./toppingItem/ToppingItem";
import styles from "./ToppingsList.module.css"

const toppings = [{
id:1,
price: 14,
image: "/images/pizzas/custom_pizza.svg",
name: "mozzarella with cheese asd"
},{
id:2,
price: 14,
image: "/images/pizzas/custom_pizza.svg",
name: "cheez"
},{
    id:3,
    price: 14,
    image: "/images/pizzas/custom_pizza.svg",
    name: "cheez"
    },{
        id:4,
        price: 14,
        image: "/images/pizzas/custom_pizza.svg",
        name: "cheez"
        },{
            id:5,
            price: 14,
            image: "/images/pizzas/custom_pizza.svg",
            name: "cheez"
            },{
                id:5,
                price: 14,
                image: "/images/pizzas/custom_pizza.svg",
                name: "cheez"
                },{
                    id:5,
                    price: 14,
                    image: "/images/pizzas/custom_pizza.svg",
                    name: "cheez"
                    },{
                        id:5,
                        price: 14,
                        image: "/images/pizzas/custom_pizza.svg",
                        name: "cheez"
                        },{
                            id:5,
                            price: 14,
                            image: "/images/pizzas/custom_pizza.svg",
                            name: "cheez"
                            }]

const ToppingsList = ({currentCost, setCurrentCost}) => {
    return (
        <div>
            <span className={styles.toppingItem__name}>Toppings</span>
            <div className={styles.toppings__toppingsContainer}>
                {toppings.map( (topping) => {
                    return (
                        <ToppingItem key={topping["id"]}
                        image={topping["image"]}
                        name={topping["name"]}
                        price={topping["price"]}
                        currentCost={currentCost}
                        setCurrentCost={setCurrentCost}>
                         
                        </ToppingItem>
                    )
                })}
                
            </div>
        </div>
    )
}

export default ToppingsList;