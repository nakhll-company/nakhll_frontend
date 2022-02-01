import * as Types from "../../types/orders"; // constants
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// action of accounting list
export const getUncompleted = (activeHojreh) => async (dispatch) => {
    // try
    try {
        const uncompleted = async () => {
            let params = {};
            let loadData = null;
            let dataUrl = `/app/api/v1/factor/shop/${activeHojreh}/uncompleted/`;
            let response = await ApiRegister().apiRequest(
                loadData,
                "get",
                dataUrl,
                true,
                params
            );
            return response;
        };

        let response = await uncompleted();
        if (response.status === 200) {
            // dispatch
            dispatch({
                type: Types.UNCOMPLETED,
                payload: response.data,
            });
        }
    } catch (error) {
    }
};