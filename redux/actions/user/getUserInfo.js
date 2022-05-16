import * as Types from "../../types/user"; // constants

import { authhttp } from "../../../services/callApi/api";
// action of accounting list
export const getUserInfo = () => async (dispatch) => {
  // try
  try {
    if (localStorage.getItem("accessToken")) {
      const getProduct = async () => {
        let response = await authhttp.get("/api/v1/get-user-info/");
        return response;
      };

      let response = await getProduct();
      if (response.status === 200) {
        // dispatch
        dispatch({
          type: Types.USER_INFO,
          payload: response.data,
        });
      }
    }
  } catch (error) {
    return false;
  }
};
