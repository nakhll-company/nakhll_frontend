export const _updatePicture = (img) => {
  return async (dispatch, getState) => {
    const id = getState().selectIdFormLanding;
   

    let dataLanding = [...getState().allDataLanding];
    dataLanding.map((El, index) => {
      if (El.ID == id.id) {
        dataLanding[index].data[id.order].image = img;
      }
    });
    await dispatch({ type: "UPDATE_PICTURE", payload: dataLanding });
  };
};
