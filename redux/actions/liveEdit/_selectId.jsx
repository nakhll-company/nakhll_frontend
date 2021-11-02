export const _selectId = (id) => {
  return async (dispatch) => {
    await dispatch({ type: "UPDATE_ID", payload: id });
  };
};
