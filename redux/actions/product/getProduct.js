import * as Types from '../../types/product'; // constants
// action of accounting list
export const getProduct = () => async dispatch => {
    // try
    try {
        let response = ["salam", "khobi"];
        // dispatch
        dispatch({
            type: Types.GET_PRODUCT,
            payload: response
        });
    } catch (error) {

    }
}