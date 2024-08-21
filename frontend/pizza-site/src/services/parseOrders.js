export const parseOrders = (orders) => {
    if (!Array.isArray(orders) || orders.length === 0) {
        return [];
    }

    const sortedOrders = orders.sort((a,b) => Date.parse(b["date"]) - Date.parse(a["date"]))

    return sortedOrders.slice(0, 25);
};