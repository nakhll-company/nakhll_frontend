import { authhttp } from "../../../services/callApi/api";
import * as Types from "../../types/orders"; // constants
// action of accounting list
export const getCompleted = (activeHojreh) => async (dispatch) => {
  // try
  try {
    const completed = async () => {
      const dataUrl = `/api/v1/shop/${activeHojreh}/invoices/?is_completed=true`;
      const response = await authhttp.get(dataUrl);
      return response;
    };

    const response = await completed();
    if (response.status === 200) {
      // dispatch
      dispatch({
        type: Types.COMPLETED,
        payload: response.data.results,
      });
    }
  } catch (error) {
    return false;
  }
};
