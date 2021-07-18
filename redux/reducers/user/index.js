import * as Types from '../../types/user';

let initialize = {
    userInfo: {}
}

function reducer(state = initialize, actions) {

    switch (actions.type) {
        case Types.USER_INFO:
            return {
                userInfo: { ...actions.payload }
            }
        default:
            return state;
    }
}
export default reducer;