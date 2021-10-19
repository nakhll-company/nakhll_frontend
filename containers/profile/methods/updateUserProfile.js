import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import { errorMessage, successMessage } from "../../utils/message";
// get user data
export const updatUserProfile = async (data) => {
    let response = await ApiRegister().apiRequest(
        data,
        "PATCH",
        `/api/v1/profile/edit_me/`,
        true,
        {}
    );
    if (response.status === 200) {
        successMessage("ویرایش اطلاعات با موفقیت صورت گرفت");
    } else if (response.response.status === 400) {
        errorMessage("لطفا عکس خود را وارد نمایید");
    } else {
        errorMessage("خطایی در ارسال داده ها پیش آمده است");
    }
};