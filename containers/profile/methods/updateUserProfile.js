import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { successMessage } from "../../utils/message";
// get user data
export const updatUserProfile = async(data) => {
    let response = await ApiRegister().apiRequest(
        data,
        "PATCH",
        `/api/v1/profile/edit_me/`,
        true, {}
    );
    if (response.status === 200) {
        successMessage("ویرایش اطلاعات با موفقیت صورت گرفت");
    }
};