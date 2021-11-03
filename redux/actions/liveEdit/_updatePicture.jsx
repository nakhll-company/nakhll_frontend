export const _updatePicture = (img) => {
  return async (dispatch, getState) => {
    const id = getState().selectIdFormLanding;

    let dataLanding = [...getState().allDataLanding];
    dataLanding.map((El, index) => {
      if (El.ID == id) {
        dataLanding[index].data.src = img;
      }
    });
    await dispatch({ type: "UPDATE_PICTURE", payload: dataLanding });
  };
};
