import { successMessage } from "../../../utils/toastifyMessage";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export const _addProduct = (productId) => {
  return async (dispatch) => {
    try {
      let token = localStorage.getItem("accessToken");
      let response = await ApiRegister().apiRequest(
        {
          "product": productId,
          "count": 1
        },
        "post",
        "/api/v1/cart/items/",
        token ? true : false,
        {}
      );

      if (response.status === 201) {
        await dispatch({
          type: "ADD_PRODUCT",
          payload: response.data,
        });
        successMessage("داده ها با موفقیت ثبت شده اند");
      }
    } catch (e) {
      return false;
    }
  };
};
