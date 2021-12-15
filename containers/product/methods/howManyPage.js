// this function earn how many page does we have
export function howManyPage(numberData, pageSize) {
    // divided number of data with number of data show in the page and rounded up
    let pages = Math.ceil(numberData / pageSize);
    // return number of page
    return pages;
}