import { authhttp } from "../../../services/callApi/api";
// create store
export const createStore = async(body) => {
    let loadData = body;
    let dataUrl = "/api/v1/shop/create/";
    let response = await authhttp.post(dataUrl, loadData);
    return response;
};