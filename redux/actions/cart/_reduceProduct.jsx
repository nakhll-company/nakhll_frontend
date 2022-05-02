import { successMessage } from "../../../utils/toastifyMessage";
import { authhttp } from "../../../services/callApi/api";

export const _reduceProduct = (productId) => {
  return async (dispatch) => {
    let token = localStorage.getItem("accessToken");
    let response = await authhttp.delete(`/api/v1/cart/items/${productId}/reduce/`)

    await dispatch({ type: "َREDUCE_PRODUCT", payload: response.data });


    // if (response.status === 200) {
    successMessage("تعداد محصول با موفقیت کاهش پیدا کرد");
  };
};
