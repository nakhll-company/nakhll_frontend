import { toast } from "react-toastify";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export const _reduceProduct = (productId) => {
  return async (dispatch) => {
    let params = {};
    let loadData = null;

    let dataUrl = `/cart2/api/cart_items/${productId}/remove/`;
    let response = await ApiRegister().apiRequest(
      loadData,
      "get",
      dataUrl,
      true,
      params
    );

    await dispatch({ type: "َREDUCE_PRODUCT", payload: response.data });

    // console.log("Reduc :>> ", response);
    // if (response.status === 200) {
    toast.success("داده ها با موفقیت ثبت شده اند", {
      position: "top-right",
      closeOnClick: true,
    });
  };
};
