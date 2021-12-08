import { successMessage } from "../../containers/utils/message";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// city
export const getCities = async (id) => {

    let response = await ApiRegister().apiRequest(
        null, "get",
        `/app/api/v1/get-cities/?bigcity_id=${id}`,
        false, {}
    );
    if (response.status === 200) {
        return response.data;
    } else {
        successMessage("خطایی در دریافت دادهای شهر پیش آمده است");
    }
};