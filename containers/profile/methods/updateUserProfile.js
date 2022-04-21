import { getUserData } from "../methods/getUserData";
import { successMessage } from "../../../utils/toastifyMessage";
import { authhttp } from "../../../services/callApi/api";
// get user data
export const updatUserProfile = async(data, setDataProfile) => {
    let response = await authhttp.patch(`/api/v1/profile/edit_me/`, data);
    if (response.status === 200) {
        await getUserData(setDataProfile);
        successMessage("ویرایش اطلاعات با موفقیت صورت گرفت");
    }
};