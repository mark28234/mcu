import { actionTypes } from "./action";

const fetchCharacters = ({ getState, dispatch }) => (next) => (action) => {
  if (action.type === actionTypes.FETCH_CHARACTERS) {
    let url =
      "https://gateway.marvel.com:443/v1/public/characters?apikey=4ade67d1009a7f988e0707ceacbf127e&limit=100";

    if (action.query) {
      url = `${url}&nameStartsWith=${action.query}`;
    }

    fetch(url, { referrer: "developer.marvel.com" })
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: actionTypes.FETCH_CHARACTERS_SUCCESS,
          data: res.data,
        });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.FETCH_CHARACTERS_ERROR });
      });
  }
  next(action);
};

export default [fetchCharacters];
