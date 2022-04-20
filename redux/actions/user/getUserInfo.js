import * as Types from "../../types/user"; // constants
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// action of accounting list
export const getUserInfo = () => async(dispatch) => {

    // try
    try {
        const getProduct = async() => {
            let response = await ApiRegister().apiRequest(
                null,
                "get",
                "/api/v1/get-user-info/",
                true, {}
            );
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
    } catch (error) {
        return false;
    }
};