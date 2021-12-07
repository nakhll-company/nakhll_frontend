import { errorMessage } from "../../containers/utils/message";
import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// api state
export const getStates = async () => {

    let response = await ApiRegister().apiRequest(
        null, "get",
        "/app/api/v1/get-all-state/",
        false, {}
    );
    if (response.status === 200) {
        return response.data;
    } else {
        errorMessage("خطایی در دریافت دادهای استان پیش آمده است");
    }
};