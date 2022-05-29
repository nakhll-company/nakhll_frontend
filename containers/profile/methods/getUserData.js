import {
    authhttp
} from "../../../services/callApi/api";
// get user data
export const getUserData = async() => {
    const response = await authhttp.get(`/api/v1/profile/me/`);
    if (response.status === 200) {
        return response.data;
    }
};