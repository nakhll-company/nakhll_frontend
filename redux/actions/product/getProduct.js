import { errorMessage } from "../../../containers/utils/message";
import { ApiRegister } from "../../../services/apiRegister/ApiRegister";
import * as Types from "../../types/product"; // constants
// action of accounting list
export const getProduct =
    (
        activeHojreh,
        product_status,
        price_from,
        price_to,
        inventory_from,
        inventory_to,
        order_by
    ) =>
        async (dispatch) => {
            // try
            try {
                if (activeHojreh.length > 0) {
                    const getProduct = async () => {
                        let params = {
                            product_status,
                            price_from,
                            price_to,
                            inventory_from,
                            inventory_to,
                            order_by,
                        };
                        let loadData = null;
                        let dataUrl = `/api/v1/shop/${activeHojreh}/products/`;
                        let response = await ApiRegister().apiRequest(
                            loadData,
                            "get",
                            dataUrl,
                            true,
                            params
                        );
                        return response;
                    };

                    let response = await getProduct();

                    if (response.status === 200) {
                        // dispatch
                        dispatch({
                            type: Types.GET_PRODUCT,
                            payload: response.results,
                        });
                    }
                }
            } catch (error) {
                errorMessage("در دریافت داده ها خطایی رخ داده است");
            }
        };