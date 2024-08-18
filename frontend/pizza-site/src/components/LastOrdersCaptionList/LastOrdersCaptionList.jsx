import { useEffect, useState } from "react";
import OrangeCaption from "../UI/Caption/OrangeCaption"
import LastOrdersList from "../UI/LastOrdersList/LastOrdersList";
import styles from './LastOrdersCaptionList.module.css';
import { getLastOrders } from "../../services/api/pizza";

const LastOrdersCaptionList = ({children}) => {
    useEffect( () => {
        const getOrders = async() => {
            const orders = await getLastOrders();
            setOrders(orders);
        };

        getOrders();
    })

    const [orders, setOrders] = useState([]);

    const pizzas = [{
        name: "pineApple",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    }
    ]

    return (
        <div >
            <div className={styles.container}>
                <OrangeCaption>{children}</OrangeCaption>
            </div>
            <div>
                <LastOrdersList pizzas={orders}></LastOrdersList>
            </div>
        </div>
    );
}

export default LastOrdersCaptionList;