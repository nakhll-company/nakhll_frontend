import { createContext } from "react";

const ContextProduct = createContext({
  All_product_list_buy: [],
  handel_AddProductTOList: () => {},
  handel_ReduceProductFromList: () => {},
  handel_DeleteProductFromList: () => {},
});

export default ContextProduct;
