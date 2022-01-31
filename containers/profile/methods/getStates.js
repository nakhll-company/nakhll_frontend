import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// api state
export const getStates = async () => {
    let params = {};
    let loadData = null;
    let dataUrl = "/app/api/v1/get-all-state/";
    let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        localStorage.getItem("accessToken"),
        params
    );
    if (response.status === 200) {
        return response.data;
    }
};