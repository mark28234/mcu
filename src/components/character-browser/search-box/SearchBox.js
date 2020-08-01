import React from "react";
import "./SearchBox.css";

let timeout;

function debounce(callback, wait) {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(callback, wait);
}

export default function SearchBox(props) {
  const { onSearch } = props;
  return (
    <div className="SearchBox">
      <input
        type="text"
        placeholder="Start typing character name"
        onChange={({ target: { value } }) => {
          debounce(() => {
            onSearch(value);
          }, 500);
        }}
      ></input>
    </div>
  );
}
