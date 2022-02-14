import { ApiRegister } from "../../services/apiRegister/ApiRegister";
// big city
export const getBigCities = async (id) => {
    try {
        let response = await ApiRegister().apiRequest(
            null,
            "get",
            `app/api/v1/get-big-cities/?state_id=${id}`,
            false, {}
        );
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        return false;
    }
};