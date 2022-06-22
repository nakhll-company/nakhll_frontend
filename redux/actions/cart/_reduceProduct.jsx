import { errorMessage, successMessage } from "../../../utils/toastifyMessage";
import { authhttp } from "../../../services/callApi/api";

export const _reduceProduct = (productId, count) => {
  return async (dispatch) => {
    const response = await authhttp.delete(
      `/api/v1/cart/items/${productId}/reduce/`
    );

    await dispatch({ type: "َREDUCE_PRODUCT", payload: response.data });

    if (response.status === 200) {
      if (count === 1) {
        errorMessage("محصول از سبد خرید حذف شد");
      } else {
        successMessage("تعداد محصول با موفقیت کاهش پیدا کرد");
      }
    }
  };
};
