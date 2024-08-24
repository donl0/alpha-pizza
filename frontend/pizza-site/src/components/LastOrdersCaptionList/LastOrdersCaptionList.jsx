import { useEffect, useState } from "react";
import OrangeCaption from "../UI/Caption/OrangeCaption"
import LastOrdersList from "../UI/LastOrdersList/LastOrdersList";
import styles from './LastOrdersCaptionList.module.css';
import { getLastOrders, getOrderById } from "../../services/api/order";
import { parseOrders } from "../../services/parseOrders";
import OrderDescribePopup from "./describePopup/OrderDescribePopup";

const LastOrdersCaptionList = ({children}) => {
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentOrder, setCurrentOrder] = useState({});

    const onMouseEnter = (x, y) => {
        setPopupPosition({ x, y });
        setPopupVisible(true);
    };

    const onMouseLeave = () =>{
        setPopupVisible(false);
    }

    const changeCurrentOrder = async (id) => {
        try {
            const order = await getOrderById(id);
            setCurrentOrder(order);
        } catch (error) {
            console.error('Error fetching order:', error);
        }
    };

    useEffect( () => {
        const setInitOrders = async() => {
            const orders = parseOrders(await getLastOrders());
            setOrders(orders);
        };

        setInitOrders();

        setInterval(setInitOrders, 2000)
    }, [])

    const [orders, setOrders] = useState([]);

    return (
        <div >
            <div className={styles.container}>
                <OrangeCaption>{children}</OrangeCaption>
            </div>
            <div>
                <LastOrdersList pizzas={orders}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                changeOrder={changeCurrentOrder}></LastOrdersList>
            </div>

            {popupVisible && (

                <OrderDescribePopup 
                    position={popupPosition} 
                    isActive={popupVisible}
                    order={currentOrder}
                />
            )}
        </div>
    );
}

export default LastOrdersCaptionList;