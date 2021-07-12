import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import * as Types from '../../types/product'; // constants
// action of accounting list
export const getProduct = (product_status, price_from, price_to, order_by) => async dispatch => {
    // try
    try {

        const getProduct = async () => {
            let params = { product_status, price_from, price_to, order_by }
            let loadData = null;
            let dataUrl = '/app/api/v1/get-shop-products/pestehkerman/';
            let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, true, params);
            return response;
        }

        let response = await getProduct();
        // dispatch
        dispatch({
            type: Types.GET_PRODUCT,
            payload: response
        });

    } catch (error) {

    }
}