export const _addToWishList = (item) => {
  return async (dispatch, getState) => {
    await dispatch({ type: "ADD_TO_WISHLIST", payload: item });
  };
};
