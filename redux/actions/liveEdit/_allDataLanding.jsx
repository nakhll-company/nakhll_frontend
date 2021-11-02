export const _allDataLanding = () => {
  return async (dispatch) => {
    await dispatch({ type: "Get_DATA" });
  };
};
