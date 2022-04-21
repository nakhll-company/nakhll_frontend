import { authhttp } from "../../../services/callApi/api";

export const getProducts = () => {
  return async (dispatch) => {
    let dataUrl = `/api/v1/cart/me/`;
    let response = await authhttp.get(dataUrl);

    await dispatch({
      type: "GET_PRODUCTS",
      payload: response.data,
    });
  };
};
