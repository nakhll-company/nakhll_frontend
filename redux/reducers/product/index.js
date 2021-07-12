import * as Types from '../../types/product';

let initialize = {
    productList: []
}

function reducer(state = initialize, actions) {
    switch (actions.type) {
        case Types.GET_PRODUCT:
            return {
                productList: [...actions.payload]
            }
        default:
            return state;
    }
}
export default reducer;