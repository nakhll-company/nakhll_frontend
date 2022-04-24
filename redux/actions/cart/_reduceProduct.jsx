import { successMessage } from "../../../utils/toastifyMessage";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export const _reduceProduct = (productId) => {
  return async (dispatch) => {
    let token = localStorage.getItem("accessToken");
    let response = await ApiRegister().apiRequest(
      null,
      "delete",
      `/api/v1/cart/items/${productId}/reduce/`,
      token ? true : false,
      {}
    );

    await dispatch({ type: "َREDUCE_PRODUCT", payload: response.data });


    // if (response.status === 200) {
    successMessage("تعداد محصول با موفقیت کاهش پیدا کرد");
  };
};
