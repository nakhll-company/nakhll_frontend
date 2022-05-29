  // final Click
export function finalClick(e,setPlaceholderSubmarckets,setSubmarketId,setData,setPage,clearErrors,categories) {
    const element = document.getElementById("wrapperMarkets");
    element.style.display = "none";
    const elementProduct = document.getElementById("wrapper_product");
    elementProduct.style.display = "flex";
    setPlaceholderSubmarckets(e);
    setSubmarketId(e.id);
    setData(categories);
    setPage((page) => page - 1);
    clearErrors("submark");
  }