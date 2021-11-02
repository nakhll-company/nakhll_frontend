export const _allDataLanding = () => {
  return async (dispatch) => {
    await dispatch({ type: "UPDATE_DATA" });
  };
};
