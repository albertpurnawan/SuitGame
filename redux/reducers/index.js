import messageReducer from "./messageReducer";
import { combineReducers } from "redux";
import usernameReducer from "./usernameReducer";
import scoreReducer from "./scoreReducer";

const Reducers = combineReducers({
  pesan: messageReducer,
  newUser: usernameReducer,
  score: scoreReducer,
});

export default Reducers;
