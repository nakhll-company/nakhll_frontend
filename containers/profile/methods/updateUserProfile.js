import { successMessage } from "../../utils/message";
import { getUserData } from "../methods/getUserData";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// get user data
export const updatUserProfile = async (data, setDataProfile) => {
    let response = await ApiRegister().apiRequest(
        data,
        "PATCH",
        `/api/v1/profile/edit_me/`,
        true, {}
    );
    if (response.status === 200) {
        await getUserData(setDataProfile);
        successMessage("ویرایش اطلاعات با موفقیت صورت گرفت");
    }
};