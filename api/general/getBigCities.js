import { http } from "../../services/callApi/api";
// big city
export const getBigCities = async(id) => {
    try {
        let response = await http.get(`/api/v1/get-big-cities/?state_id=${id}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        return false;
    }
};