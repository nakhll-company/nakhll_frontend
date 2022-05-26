import * as Types from "../../types/product";

export const getGroupProductCsvData =
  (groupProductCsvData) => async (dispatch) => {
    dispatch({
      type: Types.GROUP_PRODUCT_CSV_DATA,
      payload: groupProductCsvData,
    });
  };
