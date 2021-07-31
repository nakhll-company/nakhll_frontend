import { toast } from "react-toastify";
import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
// api state
export const getStates = async () => {
    let params = {}
    let loadData = null;
    let dataUrl = '/app/api/v1/get-all-state/';
    let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, true, params);
    if (response.status === 200) {
        return response.data;
    } else {
        toast.error("خطایی در دریافت دادهای استان پیش آمده است", {
            position: "top-right",
            closeOnClick: true,
        });
    }
}