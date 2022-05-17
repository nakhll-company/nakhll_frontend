export const showSelectUrl = () => {
  return async (dispatch) => {
    await dispatch({ type: "SHOW_SELECT_URL" });
  };
};
