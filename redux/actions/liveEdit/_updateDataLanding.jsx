export const _updateDataLanding = (list) => {
  return async (dispatch) => {
    await dispatch({ type: "UPDATE_DATA", payload: list });
  };
};
