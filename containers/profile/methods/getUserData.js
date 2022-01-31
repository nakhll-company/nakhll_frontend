import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// get user data
export const getUserData = async (setDataProfile) => {
    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/profile/me/`,
        localStorage.getItem("accessToken"), {}
    );
    if (response.status === 200) {
        setDataProfile(response.data);
    }
};