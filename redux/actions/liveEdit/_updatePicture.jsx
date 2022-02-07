import { ApiRegister } from "../../../services/apiRegister/ApiRegister";

export const _updatePicture = (img) => {
  return async (dispatch, getState) => {
    let response;
    const id = getState().selectIdFormLanding;

    try {
      let params = {};

      let loadData = {
        image: img,
        title: "",
        description: "",
      };
      let dataUrl = `/api/v1/profile/images/`;
      response = await ApiRegister().apiRequest(
        loadData,
        "POST",
        dataUrl,
        true,
        params
      );

      if (response.status !== 201) {
        alert("در بارگذاری عکس مشکلی پیش آمده");
      }
    } catch (err) {
      alert(err);
    }

    let dataLanding = [...getState().allDataLanding];
    dataLanding.map((El, index) => {
      if (El.ID == id.id) {
        dataLanding[index].data[id.order].image = response.data.image
          ? response.data.image
          : null;
      }
    });
    await dispatch({ type: "UPDATE_PICTURE", payload: dataLanding });
  };
};
