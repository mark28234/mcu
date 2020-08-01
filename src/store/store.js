import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import middlewares from "./middleware";
const initialState = {
  loading: false,
  error: false,
  characters: [],
  currentCharacter: {},
};

const storeEnhancers = applyMiddleware(...middlewares);
export const store = createStore(reducer, initialState, storeEnhancers);
