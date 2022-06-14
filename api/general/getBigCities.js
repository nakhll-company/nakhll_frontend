import {
    http
} from "../../services/callApi/api";
// big city
export const getBigCities = async (id) => {
    const response = await http.get(`/kkkkk/lfklgkfdg/?state_id=${id}`);
    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
};