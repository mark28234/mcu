import React from "react";
import SearchBox from "./search-box/SearchBox";
import Characters from "./characters/Characters";
import Loader from "./loader/Loader";

export default function CharacterBrowser(props) {
  const { loading, characters, onSearch } = props;
  return (
    <>
      <SearchBox onSearch={onSearch} />
      {loading && <Loader />}
      {!loading && <Characters characters={characters} />}
    </>
  );
}
