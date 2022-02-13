import { errorMessage } from "../../../utils/toastifyMessage";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export const _deleteProduct = (productId, productTitle) => {
  return async (dispatch) => {
    let token = localStorage.getItem("accessToken");
    let response = await ApiRegister().apiRequest(
      null,
      "delete",
      `/api/v1/cart/items/${productId}/delete/`,
      token ? true : false,
      {}
    );
    await dispatch({ type: "DELETE_PRODUCT", payload: response.data });

    errorMessage(` محصول  ${productTitle}  حذف شد . `);
  };
};
