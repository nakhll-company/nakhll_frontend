import * as Types from "../../types/orders"; // constants
import { authhttp } from "../../../services/callApi/api";
// action of accounting list
export const getUncompleted = (activeHojreh) => async (dispatch) => {
  // try
  try {
    const uncompleted = async () => {
      const dataUrl = `/api/v1/shop/${activeHojreh}/invoices/?is_completed=false`;
      const response = await authhttp.get(dataUrl);
      return response;
    };

    const response = await uncompleted();
    if (response.status === 200) {
      // dispatch
      dispatch({
        type: Types.UNCOMPLETED,
        payload: response.data.results,
      });
    }
  } catch (error) {
    return false;
  }
};
