const initialData = {
  winScore: 0,
  loseScore: 0,
  drawScore: 0,
};

const scoreReducer = (state = initialData, action) => {
  switch (action.type) {
    case "WIN":
      return {
        ...state,
        winScore: action.payload,
      };
    case "LOSE":
      return {
        ...state,
        loseScore: action.payload,
      };
    case "DRAW":
      return {
        ...state,
        drawScore: action.payload,
      };
    default:
      return state;
  }
};

export default scoreReducer;
