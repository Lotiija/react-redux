import CounterReducer from "./CounterReducer";
import IsLoggedReducer from "./IsLoggedReducer";
import { combineReducers } from "redux";

const CombineReducer = combineReducers({
  counter: CounterReducer,
  isLogged: IsLoggedReducer
})

export default CombineReducer;