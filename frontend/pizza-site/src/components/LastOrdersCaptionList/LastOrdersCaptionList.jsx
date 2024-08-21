import { useEffect, useState } from "react";
import OrangeCaption from "../UI/Caption/OrangeCaption"
import LastOrdersList from "../UI/LastOrdersList/LastOrdersList";
import styles from './LastOrdersCaptionList.module.css';
import { getLastOrders } from "../../services/api/order";
import { parseOrders } from "../../services/parseOrders";
import OrderDescribePopup from "./describePopup/OrderDescribePopup";

const LastOrdersCaptionList = ({children}) => {
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
    const [popupVisible, setPopupVisible] = useState(false);

    const onMouseEnter = (x, y) => {
        setPopupPosition({ x, y });
        setPopupVisible(true);
    };

    const onMouseLeave = () =>{
        setPopupVisible(false);
    }

    useEffect( () => {
        const getOrders = async() => {
            const orders = parseOrders(await getLastOrders());
            setOrders(orders);
        };

        getOrders();
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
                onMouseLeave={onMouseLeave}></LastOrdersList>
            </div>
            {popupVisible && (
                <OrderDescribePopup 
                    position={popupPosition} 
                    isActive={popupVisible}
                />
            )}
        </div>
    );
}

export default LastOrdersCaptionList;