import { authhttp } from "../../../services/callApi/api";

export const getProducts = () => {
  return async (dispatch) => {
    const dataUrl = `/api/v1/cart/me/`;
    const response = await authhttp.get(dataUrl);

    await dispatch({
      type: "GET_PRODUCTS",
      payload: response.data,
    });
  };
};
