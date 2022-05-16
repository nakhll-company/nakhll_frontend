export function checkTimeOrder(OrderTime) {
  let localTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });
  let orderHour = OrderTime.split(":");
  let localHour = localTime.split(":");
  let passHour = parseInt(orderHour[0]) + 4;
  if (passHour > localHour[0]) {
    return "canceled";
  } else {
    return "haveTime";
  }
}
