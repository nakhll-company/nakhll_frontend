import * as Types from "../../types/product";

let initialize = {
  productList: {},
  groupProductCsvData: [],
  groupProductCsvHeader: [],
};

function reducer(state = initialize, actions) {
  switch (actions.type) {
    case Types.GET_PRODUCT:
      return {
        productList: { ...actions.payload },
      };
    case Types.GROUP_PRODUCT_CSV_DATA:
      return {
        ...state,
        groupProductCsvData: [...actions.payload],
      };
    case Types.GROUP_PRODUCT_CSV_HEADER:
      return {
        ...state,
        groupProductCsvHeader: [...actions.payload],
      };
    default:
      return state;
  }
}
export default reducer;
