import * as Types from '../../types/user'; // constants
// action of accounting list
export const getActiveHojreh = (activeHojreh) => async dispatch => {

    // dispatch
    dispatch({
        type: Types.ACTIVE_HOJREH,
        payload: activeHojreh
    });

}