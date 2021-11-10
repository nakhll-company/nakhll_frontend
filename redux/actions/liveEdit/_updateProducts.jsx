export const _updateProducts = (products) => {
  return async (dispatch, getState) => {
    const id = getState().selectIdFormLanding;

    let dataLanding = [...getState().allDataLanding];
    dataLanding.map((El, index) => {
      if (El.ID == id.id) {
        dataLanding[index].data[id.order].products = products;
      }
    });
    await dispatch({ type: "UPDATE_PRODUCTS", payload: dataLanding });
  };
};
