import { toast } from "react-toastify";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export const _deleteProduct = (productId, productTitle) => {
  return async (dispatch) => {
    let params = {};
    let loadData = null;

    let dataUrl = `/cart2/api/cart_items/${productId}/delete/`;
    let response = await ApiRegister().apiRequest(
      loadData,
      "get",
      dataUrl,
      true,
      params
    );
    await dispatch({ type: "DELETE_PRODUCT", payload: response.data });

    toast.error(` محصول  ${productTitle}  حذف شد . `, {
      position: "top-right",
      closeOnClick: true,
    });
  };
};
