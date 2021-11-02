export const _selectId = (id) => {
  return async (dispatch) => {
    await dispatch({ type: "DELETE_ID", payload: "" });
  };
};
