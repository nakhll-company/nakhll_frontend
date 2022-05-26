import { createContext } from "react";

const ContextListProductPage = createContext({
  listProducts: [],
  setIsFree: () => {},
  setIsFellowCitizen: () => {},
  sortProductDes: () => {},
  sortProductAsc: () => {},
  sortBestsellingProduct: () => {},
  handel_filterModal: () => {},
});

export default ContextListProductPage;
