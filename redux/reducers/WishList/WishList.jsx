export const WishList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [...action.payload];
      break;

    case "DELETE_FROM_WISHLIST":
      return [...action.payload];
      break;

    default:
      return state;
      break;
  }
};
