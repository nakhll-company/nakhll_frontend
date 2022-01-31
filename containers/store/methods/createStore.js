import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
// create store
export const createStore = async (body) => {
    let params = {}
    let loadData = body;
    let dataUrl = '/api/v1/shop/create/';
    let response = await ApiRegister().apiRequest(loadData, 'post', dataUrl, localStorage.getItem("accessToken"), params);
    return response;
}