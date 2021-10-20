const messageReducer = (state = "Patuhi Prokes", action) => {
  switch (action.type) {
    case "PESANBARU":
      return {
        state: action.payload,
      };
    default:
      return state;
  }
};

export default messageReducer;
