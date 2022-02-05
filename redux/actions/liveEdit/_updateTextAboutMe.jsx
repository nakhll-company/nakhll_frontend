export const _updateTextAboutMe = ({ text }) => {
  return async (dispatch, getState) => {
    const id = getState().selectIdFormLanding;

    let dataLanding = [...getState().allDataLanding];
    dataLanding.map((El, index) => {
      if (El.ID == id.id) {
        dataLanding[index].data[id.order].text = text;
      }
    });
    await dispatch({
      type: "UPDATE_TITLE_COLOR_SUBTITLE",
      payload: dataLanding,
    });
  };
};
