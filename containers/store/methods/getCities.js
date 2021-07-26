import { toast } from "react-toastify";
import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
// city
export const getCities = async (id) => {
    let params = {}
    let loadData = null;
    let dataUrl = `/app/api/v1/get-cities/?bigcity_id=${id}`;
    let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, true, params);
    if (response.status === 200) {
        return response.data;
    } else {
        toast.error("خطایی در دریافت دادهای شهر پیش آمده است", {
            position: "top-right",
            closeOnClick: true,
        });
    }
}