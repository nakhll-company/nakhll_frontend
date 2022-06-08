// Go Back
export function goBack(page, setPage, setData, categories) {
  if (page === 1) {
    const element = document.getElementById("wrapperMarkets");
    element.style.display = "none";
    const elementProduct = document.getElementById("wrapper_product");
    elementProduct.style.display = "flex";
  } else {
    setData(categories);
    setPage(1);
  }
}
