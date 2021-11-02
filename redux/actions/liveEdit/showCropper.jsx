export const showCropper = () => {
  return async (dispatch) => {
    await dispatch({ type: "SHOW_CROPPER" });
  };
};
