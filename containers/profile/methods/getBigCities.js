import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// big city
export const getBigCities = async (id) => {

    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/get-big-cities/?state_id=${id}`,
        true,
        {}
    );
    if (response.status === 200) {
        return response.data;
    }
};