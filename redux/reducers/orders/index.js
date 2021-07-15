import * as Types from '../../types/orders';

let initialize = {
    ordersList: [],
}

function reducer(state = initialize, actions) {
    switch (actions.type) {
        case Types.COMPLETED:
            return {
                ordersList: [...actions.payload]
            }
        case Types.UNCOMPLETED:
            return {
                ordersList: [...actions.payload]
            }
        default:
            return state;
    }
}
export default reducer;