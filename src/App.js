import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { store } from "./store/store";
import { actionTypes } from "./store/action";

import CharacterBrowser from "./components/character-browser/CharacterBrowser";

import "./App.css";
import CharacterInfo from "./components/character-info/CharacterInfo";

function onSearch(query) {
  store.dispatch({ type: actionTypes.FETCH_CHARACTERS, query });
}

export default function App() {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
    store.dispatch({ type: actionTypes.FETCH_CHARACTERS });
  }, []);

  return (
    <div className="App">
      <div className="App-Header">
        <h1>Marvel Characters</h1>
      </div>
      <div className="App-Content">
        <BrowserRouter>
          <Switch>
            <Route path="/character/:id">
              <CharacterInfo character={state.currentCharacter} />
            </Route>
            <Route path="/">
              <CharacterBrowser
                loading={state.loading}
                characters={state.characters}
                onSearch={onSearch}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}
