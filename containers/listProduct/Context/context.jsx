import { createContext } from "react";

const ContextListProductPage = createContext({
  mainList: [],
  listProducts: [],
  filtersListProducts: [],
  listFilters: {},
  setListFilters: () => {},
  setItemInFilterList: () => {},
  setFiltersListProducts: () => {},

  sortProductDes: () => {},
  sortProductAsc: () => {},
  sortBestsellingProduct: () => {},
});

export default ContextListProductPage;
