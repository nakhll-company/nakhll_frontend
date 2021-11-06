export const WishList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [...state, action.payload];
      break;

    case "DELETE_FROM_WISHLIST":
      return [...state, action.payload];
      break;

    default:
      return state;
      break;
  }
};
