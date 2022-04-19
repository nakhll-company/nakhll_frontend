import { http } from "../../services/callApi/api";
// api state
export const getStates = async() => {
    try {
        let response = await http.get("/api/v1/get-all-state/");
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        return false;
    }
};