let initialize = {
  allProduct: {},
};

const reducer = (state = initialize, actions) => {
  switch (actions.type) {
    case "GET_PRODUCTS":
      return {
        allProduct: { ...actions.payload },
      };
    case "ADD_PRODUCT":
      return {
        allProduct: { ...actions.payload },
      };

    case "َREDUCE_PRODUCT":
      return {
        allProduct: { ...actions.payload },
      };

    case "DELETE_PRODUCT":
      return {
        allProduct: { ...actions.payload },
      };

    default:
      return state;
  }
};
export default reducer;
