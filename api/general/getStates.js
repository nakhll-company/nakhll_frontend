import {
    http
} from "../../services/callApi/api";
// api state
export const getStates = async () => {
    const response = await http.get("/api/v1/get-all-state/");
    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
};