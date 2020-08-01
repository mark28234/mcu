import React from "react";
import Character from "../character/Character";
import "./Characters.css";
import { useHistory } from "react-router-dom";

export default function Characters({ characters }) {
  const history = useHistory();

  return (
    <div className="Characters">
      {characters.map((character) => (
        <Character
          key={character.id}
          {...character}
          onClick={(id) => history.push(`/character/${character.id}`)}
        />
      ))}
    </div>
  );
}
