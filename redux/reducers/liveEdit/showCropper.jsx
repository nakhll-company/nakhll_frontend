export const showCropper = (state = false, action) => {
  switch (action.type) {
    case "SHOW_CROPPER":
      return !state;
      break;
    default:
      return state;
  }
};
