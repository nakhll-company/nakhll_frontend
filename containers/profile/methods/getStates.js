import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// api state
export const getStates = async () => {

    let response = await ApiRegister().apiRequest(
        null,
        "get",
        "/api/v1/get-all-state/",
        true,
        {}
    );
    if (response.status === 200) {
        return response.data;
    }
};