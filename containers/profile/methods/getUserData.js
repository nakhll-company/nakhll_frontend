import {
    authhttp
} from "../../../services/callApi/api";
// get user data
export const getUserData = async(setDataProfile) => {
    const response = await authhttp.get(`/api/v1/profile/me/`);
    if (response.status === 200) {
        setDataProfile(response.data);
    }
};