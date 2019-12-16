import { combineReducers } from "redux";
import moviesReducer from "./movies_reducer";

const rootReducer = combineReducers({
  movies: moviesReducer
});

export default rootReducer;
