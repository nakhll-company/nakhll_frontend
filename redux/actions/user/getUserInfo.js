import * as Types from "../../types/user"; // constants

import {
    authhttp
} from "../../../services/callApi/api";
// action of accounting list
export const getUserInfo = () => async(dispatch) => {
    // try
    try {
        if (localStorage.getItem("refreshToken")) {
            const getProduct = async() => {
                const response = await authhttp.get("/api/v1/get-user-info/");
                return response;
            };

            const response = await getProduct();
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