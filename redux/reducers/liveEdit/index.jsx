const reducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_CROPPER":
      return !state;

    default:
      return state;
  }
};

export default reducer;
