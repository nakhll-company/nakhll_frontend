import * as Types from "../../types/product"; // constants
import { authhttp } from "../../../services/callApi/api";
// action of accounting list
export const getProduct =
  (
    activeHojreh,
    product_status,
    price_from,
    price_to,
    inventory_from,
    inventory_to,
    order_by,
    search,
    page
  ) =>
  async (dispatch) => {
    console.log("page", page);
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
            search,
            page,
          };

          let dataUrl = `/api/v1/shop/${activeHojreh}/products/`;
          let response = await authhttp.get(dataUrl, { params });
          return response;
        };

        let response = await getProduct();

        if (response.status === 200) {
          // dispatch
          dispatch({
            type: Types.GET_PRODUCT,
            payload: response.data,
          });
        }
      }
    } catch (error) {}
  };
