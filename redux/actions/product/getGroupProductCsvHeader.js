import * as Types from "../../types/product";

export const getGroupProductCsvHeader = (groupProductCsvHeader) => async (dispatch) => {

    dispatch({
        type: Types.GROUP_PRODUCT_CSV_HEADER,
        payload: groupProductCsvHeader,
    })
}