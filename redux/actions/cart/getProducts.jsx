import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export const getProducts = () => {
  return async (dispatch) => {
    let params = {};
    let loadData = null;
    let dataUrl = `/cart2/api/carts/my/`;
    let response = await ApiRegister().apiRequest(
      loadData,
      "get",
      dataUrl,
      true,
      params
    );

    await dispatch({
      type: "GET_PRODUCTS",
      payload: response.data,
    });
  };
};
