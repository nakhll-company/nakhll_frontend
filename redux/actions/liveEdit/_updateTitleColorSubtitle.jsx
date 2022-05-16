export const _updateTitleColorSubtitle = ({ color, title, subTitle }) => {
  return async (dispatch, getState) => {
    const id = getState().selectIdFormLanding;

    const dataLanding = [...getState().allDataLanding];
    dataLanding.map((El, index) => {
      if (El.ID == id.id) {
        dataLanding[index].data[id.order].titleComponent = title;
        dataLanding[index].data[id.order].subTitle = subTitle;
        dataLanding[index].data[id.order].color = color;
      }
    });
    await dispatch({
      type: "UPDATE_TITLE_COLOR_SUBTITLE",
      payload: dataLanding,
    });
  };
};
