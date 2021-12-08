import { successMessage } from "../../../containers/utils/message";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export const _reduceProduct = (productId) => {
  return async (dispatch) => {
    let params = {};
    let loadData = null;

    let dataUrl = `/cart2/api/cart_items/${productId}/remove/`;
    let token = localStorage.getItem("accessToken");
    let response = await ApiRegister().apiRequest(
      loadData,
      "get",
      dataUrl,
      token ? true : false,
      params
    );

    await dispatch({ type: "َREDUCE_PRODUCT", payload: response.data });


    // if (response.status === 200) {
    successMessage("داده ها با موفقیت ثبت شده اند");
  };
};
