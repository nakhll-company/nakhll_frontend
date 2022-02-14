import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// api state
export const getStates = async () => {
    try {
        let response = await ApiRegister().apiRequest(
            null,
            "get",
            "app/api/v1/get-all-state/",
            false, {}
        );
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        return false;
    }
};