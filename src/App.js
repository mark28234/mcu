import React, { useEffect, useState } from "react";
import "./App.css";

import Character from "./components/character/Character";
import SearchBox from "./components/search-box/SearchBox";
import { store } from "./store/store";
import { actionTypes } from "./store/action";

function App() {
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
        <div>
          <h1>Marvel Characters</h1>
        </div>
        <div>
          <SearchBox
            onSearch={(query) => {
              store.dispatch({ type: actionTypes.FETCH_CHARACTERS, query });
            }}
          />
        </div>
      </div>
      <div className="App-Content">
        {state.loading && (
          <div className="App-Loader">
            <h4>Loading Characters</h4>
          </div>
        )}

        <div className="Characters">
          {!state.loading &&
            state.characters &&
            state.characters.map((character) => (
              <Character key={character.id} {...character} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
