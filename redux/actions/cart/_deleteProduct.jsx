import { errorMessage } from "../../../utils/toastifyMessage";
import { authhttp } from "../../../services/callApi/api";

export const _deleteProduct = (productId, productTitle) => {
  return async (dispatch) => {
    let response = await authhttp.delete(
      `/api/v1/cart/items/${productId}/delete/`
    );
    await dispatch({ type: "DELETE_PRODUCT", payload: response.data });

    errorMessage(` محصول  ${productTitle}  حذف شد . `);
  };
};
