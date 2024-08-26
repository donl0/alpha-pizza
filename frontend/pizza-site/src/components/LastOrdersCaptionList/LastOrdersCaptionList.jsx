import { useEffect, useState, useRef, useCallback } from "react";
import OrangeCaption from "../UI/Caption/OrangeCaption";
import LastOrdersList from "../UI/LastOrdersList/LastOrdersList";
import styles from './LastOrdersCaptionList.module.css';
import { getLastOrders, getOrderById } from "../../services/api/order";
import { parseOrders } from "../../services/parseOrders";
import OrderDescribePopup from "./describePopup/OrderDescribePopup";

const LastOrdersCaptionList = ({ children }) => {
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
    const [popupVisible, setPopupVisible] = useState(false);
    const [currentOrder, setCurrentOrder] = useState({});
    const [orders, setOrders] = useState([]);
    const intervalRef = useRef(null);

    const onMouseEnter = (x, y) => {
        setPopupPosition({ x, y });
        setPopupVisible(true);
    };

    const onMouseLeave = () => {
        setPopupVisible(false);
    };

    const changeCurrentOrder = async (id) => {
        try {
            const order = await getOrderById(id);
            setCurrentOrder(order);
        } catch (error) {
            console.error('Error fetching order:', error);
        }
    };

    const setInitOrders = useCallback(async () => {
        const orders = parseOrders(await getLastOrders());
        setOrders(orders);
    }, []);

    useEffect(() => {
        setInitOrders();

        intervalRef.current = setInterval(setInitOrders, 2000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [setInitOrders]);

    return (
        <div>
            <div className={styles.container}>
                <OrangeCaption>{children}</OrangeCaption>
            </div>
            <div>
                <LastOrdersList 
                    pizzas={orders}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    changeOrder={changeCurrentOrder}
                />
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
