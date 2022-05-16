import * as Types from "../../types/user";

const initialize = {
    userInfo: {},
    activeHojreh: "",
};

function reducer(state = initialize, actions) {
    switch (actions.type) {
        case Types.USER_INFO:
            return {
                ...state,
                userInfo: {...actions.payload
                },
            };
        case Types.ACTIVE_HOJREH:
            return {
                ...state,
                activeHojreh: actions.payload,
            };
        default:
            return state;
    }
}
export default reducer;