import { createContext } from "react";

const ContextProduct = createContext({
  allProductListBuy: [],
  handelAddProductTOList: () => {},
  handelReduceProductFromList: () => {},
  handelDeleteProductFromList: () => {},
});

export default ContextProduct;
