import { errorMessage } from "../../../containers/utils/message";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export const _deleteProduct = (productId, productTitle) => {
  return async (dispatch) => {
    let params = {};
    let loadData = null;

    let dataUrl = `/cart2/api/cart_items/${productId}/delete/`;
    let token = localStorage.getItem("accessToken");
    let response = await ApiRegister().apiRequest(
      loadData,
      "get",
      dataUrl,
      token ? true : false,
      params
    );
    await dispatch({ type: "DELETE_PRODUCT", payload: response.data });

    errorMessage(` محصول  ${productTitle}  حذف شد . `);
  };
};
