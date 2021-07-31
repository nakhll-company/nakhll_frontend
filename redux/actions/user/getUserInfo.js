import { toast } from "react-toastify";
import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import * as Types from '../../types/user'; // constants
// action of accounting list
export const getUserInfo = () => async dispatch => {
    // try
    try {

        const getProduct = async () => {
            let params = {}
            let loadData = null;
            let dataUrl = '/app/api/v1/get-user-info/';
            let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, true, params);
            return response;
        }

        let response = await getProduct();
        if (response.status === 200) {
            // dispatch
            dispatch({
                type: Types.USER_INFO,
                payload: response.data
            });
        }

    } catch (error) {
        toast.error("لطفا ابتدا وارد سایت شوید", {
            position: "top-right",
            closeOnClick: true,
        });
        setTimeout(() => {
            location.replace("https://www.nakhll.com");
        }, 3000);
    }
}