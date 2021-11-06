export const _deleteFromWishList = (item) => {
  return async (dispatch, getState) => {
    await dispatch({ type: "DELETE_FROM_WISHLIST", payload: item });
  };
};
