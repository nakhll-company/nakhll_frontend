import { errorMessage } from "../../containers/utils/message";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// big city
export const getBigCities = async (id) => {

    let response = await ApiRegister().apiRequest(
        null, "get",
        `/app/api/v1/get-big-cities/?state_id=${id}`,
        false, {}
    );
    if (response.status === 200) {
        return response.data;
    } else {
        errorMessage("خطایی در دریافت دادهای شهرستان پیش آمده است");
    }
};