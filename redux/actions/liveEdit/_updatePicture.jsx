import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export const _updatePicture = (img) => {
  return async (dispatch, getState) => {
    const id = getState().selectIdFormLanding;

    try {
      let params = {};
      let loadData = img;
      let dataUrl = `/api/v1/profile/images/`;
      let response = await ApiRegister().apiRequest(
        loadData,
        "POST",
        dataUrl,
        true,
        params
      );

      if (response.status === 200) {
      } else {
        alert(response);
      }
    } catch (err) {
      alert(err);
    }

    let dataLanding = [...getState().allDataLanding];
    dataLanding.map((El, index) => {
      if (El.ID == id.id) {
        dataLanding[index].data[id.order].image = img;
      }
    });
    await dispatch({ type: "UPDATE_PICTURE", payload: dataLanding });
  };
};
