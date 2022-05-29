
export function undiviedNumber(num) {
    return num.split(',').join('')
}

function diviedNumber(num = "") {
  return num
    .toString()
    .replace(/,/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default diviedNumber;
