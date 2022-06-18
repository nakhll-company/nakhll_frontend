import { http } from "../../services/callApi/api";
// big city
export const getBigCities = async (id) => {
    const response = await http.get(`/api/v1/get-big-cities/?state_id=${id}`);
    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
};
