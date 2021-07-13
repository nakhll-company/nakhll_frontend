import { ApiRegister } from '../../../../services/apiRegister/ApiRegister';
// get open orders
export async function getCloseOrders() {
    let params = {}
    let loadData = null;
    let dataUrl = '/app/api/v1/factor/shop/pestehkerman/completed/';
    let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, true, params);
    return response;
}