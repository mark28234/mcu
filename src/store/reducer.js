import { actionTypes } from "./action";

export default function reducer(state, action) {
  console.log(action, state);
  switch (action.type) {
    case actionTypes.FETCH_CHARACTERS:
      return { ...state, loading: true, error: false };
    case actionTypes.FETCH_CHARACTERS_ERROR:
      return { ...state, loading: false, error: true };
    case actionTypes.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        characters: action.data.results,
      };
    default:
      return { ...state };
  }
}
