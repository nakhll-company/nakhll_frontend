import * as Types from "../../types/product"; // constants
import {
    authhttp
} from "../../../services/callApi/api";
// action of accounting list
export const getProduct =
    (
        activeHojreh,
        productStatus,
        priceFrom,
        priceTo,
        inventoryFrom,
        inventoryTo,
        orderBy,
        search,
        page
    ) =>
    async(dispatch) => {
        // try
        try {
            if (activeHojreh.length > 0) {
                const getProduct = async() => {
                    const params = {
                        'product_status':productStatus ,
                        'price_from':priceFrom,
                        'price_to':priceTo,
                        'inventory_from':inventoryFrom,
                        'inventory_to':inventoryTo,
                        'order_by':orderBy,
                        search,
                        page,
                    };

                    const dataUrl = `/api/v1/shop/${activeHojreh}/products/`;
                    const response = await authhttp.get(dataUrl, {params});
                    return response;
                };

                const response = await getProduct();

                if (response.status === 200) {
                    // dispatch
                    dispatch({
                        type: Types.GET_PRODUCT,
                        payload: response.data,
                    });
                }
            }
        } catch (error) {
            return false;
        }
    };