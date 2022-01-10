import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export const getProducts = () => {
  return async (dispatch) => {
    let params = {};
    let loadData = null;
    let dataUrl = `/cart2/api/carts/my/`;
    let token = localStorage.getItem("accessToken");
    let response = await ApiRegister().apiRequest(
      loadData,
      "get",
      dataUrl,
      token ? true : false,
      params
    );

    await dispatch({
      type: "GET_PRODUCTS",
      payload: response.data,
    });
  };
};
