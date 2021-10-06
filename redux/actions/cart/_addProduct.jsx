import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

import {
  errorMessage,
  successMessage,
} from "../../../containers/utils/message";
export const _addProduct = (productId) => {
  return async (dispatch) => {
    try {
      let params = {};
      let loadData = null;
      let dataUrl = `/cart2/api/cart_items/${productId}/add/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );

      if (response.status === 201) {
        await dispatch({
          type: "ADD_PRODUCT",
          payload: response.data,
        });
        successMessage("داده ها با موفقیت ثبت شده اند");
      } else {
        errorMessage("موجودی کافی نمی باشد.");
      }
    } catch (e) {
      const error = e.response.data[0];
      errorMessage(error);
    }
  };
};