import {
    authhttp
} from "../../../services/callApi/api";
// create store
export const createStore = async(body) => {
    const loadData = body;
    const dataUrl = "/api/v1/shop/create/";
    const response = await authhttp.post(dataUrl, loadData);
    return response;
};