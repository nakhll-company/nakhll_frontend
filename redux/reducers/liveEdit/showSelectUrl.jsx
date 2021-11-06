export const showSelectUrl = (state = false, action) => {
  switch (action.type) {
    case "SHOW_SELECT_URL":
      return !state;
      break;

    default:
      return state;
      break;
  }
};
