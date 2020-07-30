import React from "react";
import "./Character.css";

export default function Character(props) {
  const {
    id,
    name,
    thumbnail: { path, extension },
  } = props;
  let src = `${path}.${extension}`;
  return (
    <div key={id} className="Character">
      <img alt={name} src={src}></img>
      <h5 key={id}>{name}</h5>
    </div>
  );
}
