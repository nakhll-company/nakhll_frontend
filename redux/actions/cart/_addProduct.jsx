import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { toast } from "react-toastify";
export const _addProduct = (productId) => {
  return async (dispatch) => {
    try {
      let params = {};
      let loadData = null;
      let dataUrl = `/cart2/api/cart_items/${productId}/add/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );

      if (response.status === 201) {
        await dispatch({
          type: "ADD_PRODUCT",
          payload: response.data,
        });

        toast.success("داده ها با موفقیت ثبت شده اند", {
          position: "top-right",
          closeOnClick: true,
        });
      } else {
        toast.error("موجودی کافی نمی باشد.", {
          position: "top-center",
          closeOnClick: true,
        });
      }
    } catch (e) {
      const error = e.response.data[0];
      toast.error(error, {
        position: "top-center",
        closeOnClick: true,
      });
    }
  };
};
