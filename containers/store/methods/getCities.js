import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { successMessage } from "../../utils/message";
// city
export const getCities = async(id) => {
    let params = {};
    let loadData = null;
    let dataUrl = `/app/api/v1/get-cities/?bigcity_id=${id}`;
    let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
    );
    if (response.status === 200) {
        return response.data;
    } else {
        successMessage("خطایی در دریافت دادهای شهر پیش آمده است");
    }
};