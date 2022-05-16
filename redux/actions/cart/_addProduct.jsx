import { successMessage } from "../../../utils/toastifyMessage";
import { authhttp } from "../../../services/callApi/api";

export const _addProduct = (productId) => {
  return async (dispatch) => {
    try {
      let token = localStorage.getItem("accessToken");
      let response = await authhttp.post("/api/v1/cart/items/", {
        product: productId,
        count: 1,
      });

      if (response.status === 201) {
        await dispatch({
          type: "ADD_PRODUCT",
          payload: response.data,
        });
        successMessage("محصول با موفقیت به سبد خرید شما اضافه شد");
      }
    } catch (e) {
      return false;
    }
  };
};
