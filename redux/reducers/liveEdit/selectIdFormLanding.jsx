export const selectIdFormLanding = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_ID":
      return action.payload;
      break;

    case "DELETE_ID":
      return action.payload;

      break;

    default:
      return state;
      break;
  }
};
