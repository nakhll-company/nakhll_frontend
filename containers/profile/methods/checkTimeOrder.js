export function checkTimeOrder(OrderTime) {
    const localTime = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
    });
    const orderHour = OrderTime.split(":");
    const localHour = localTime.split(":");
    const passHour = parseInt(orderHour[0]) + 4;
    if (passHour > localHour[0]) {
        return "canceled";
    } else {
        return "haveTime";
    }
}