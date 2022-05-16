export const _updateUrl = (SelectedUrl, title) => {
  return async (dispatch, getState) => {
    const id = getState().selectIdFormLanding;

    const dataLanding = [...getState().allDataLanding];
    dataLanding.map((El, index) => {
      if (El.ID == id.id) {
        dataLanding[index].data[id.order].url = SelectedUrl;
        dataLanding[index].data[id.order].title = title;
      }
    });
    await dispatch({ type: "UPDATE_URL", payload: dataLanding });
  };
};
