export const _updateUrl = (SelectedUrl) => {
  return async (dispatch, getState) => {
    const id = getState().selectIdFormLanding;

    let dataLanding = [...getState().allDataLanding];
    dataLanding.map((El, index) => {
      if (El.ID == id.id) {
        dataLanding[index].data[id.order].url = SelectedUrl;
      }
    });
    await dispatch({ type: "UPDATE_URL", payload: dataLanding });
  };
};
