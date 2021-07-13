import { ApiRegister } from '../../../../services/apiRegister/ApiRegister';
// get open orders
export async function getOpenOrders() {
    let params = {}
    let loadData = null;
    let dataUrl = '/app/api/v1/factor/shop/pestehkerman/uncompleted/';
    let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, true, params);
    return response;
}