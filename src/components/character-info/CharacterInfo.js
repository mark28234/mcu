import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { store } from "../../store/store";
import { actionTypes } from "../../store/action";

function getImageUrl({ thumbnail }) {
  return thumbnail && `${thumbnail.path}.${thumbnail.extension}`;
}

export default function CharacterInfo({ character }) {
  const { id } = useParams();

  useEffect(() => {
    store.dispatch({ type: actionTypes.FETCH_CHARACTER, id });
  }, [id]);

  return (
    <>
      <Link to="/">Back</Link>
      <h1>{character?.name}</h1>
      <p>{character?.description}</p>
      <img src={getImageUrl(character)} alt={character?.name} />
    </>
  );
}
