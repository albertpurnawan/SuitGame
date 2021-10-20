const usernameReducer = (state = "DefaultPlayer", action) => {
  switch (action.type) {
    case "NEWUSER":
      return action.payload;

    default:
      return state;
  }
};

export default usernameReducer;
