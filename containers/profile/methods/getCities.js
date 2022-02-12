import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// city
export const getCities = async (id) => {

    let response = await ApiRegister().apiRequest(
        null,
        "get",
        `/api/v1/get-cities/?bigcity_id=${id}`,
        true,
        {}
    );
    if (response.status === 200) {
        return response.data;
    }
};