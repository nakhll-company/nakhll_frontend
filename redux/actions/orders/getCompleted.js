import { errorMessage } from "../../../containers/utils/message";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import * as Types from "../../types/orders"; // constants
// action of accounting list
export const getCompleted = (activeHojreh) => async(dispatch) => {
    // try
    try {
        const completed = async() => {
            let params = {};
            let loadData = null;
            let dataUrl = `/app/api/v1/factor/shop/${activeHojreh}/completed/`;
            let response = await ApiRegister().apiRequest(
                loadData,
                "get",
                dataUrl,
                true,
                params
            );
            return response;
        };

        let response = await completed();
        if (response.status === 200) {
            // dispatch
            dispatch({
                type: Types.COMPLETED,
                payload: response.data,
            });
        }
    } catch (error) {
        errorMessage("در دریافت داده ها خطایی رخ داده است");
    }
};