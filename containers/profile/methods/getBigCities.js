import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
// big city
export const getBigCities = async (id) => {
    let params = {};
    let loadData = null;
    let dataUrl = `/app/api/v1/get-big-cities/?state_id=${id}`;
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