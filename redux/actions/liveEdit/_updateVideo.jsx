export const _updateVideo = (video, title) => {
  return async (dispatch, getState) => {
    const id = getState().selectIdFormLanding;

    let dataLanding = [...getState().allDataLanding];
    dataLanding.map((El, index) => {
      if (El.ID == id.id) {
        dataLanding[index].data[id.order].video = video;
        dataLanding[index].data[id.order].title = title;
      }
    });
    await dispatch({ type: "UPDATE_URL", payload: dataLanding });
  };
};
