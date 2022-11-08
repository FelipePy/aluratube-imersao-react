import StyledSearch from "./styled";
import React from "react";

export default function Search({ valueFilter, setValueFilter }) {
  const valueSearch = valueFilter;
  const setValueSearch = setValueFilter;

  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => setValueSearch(e.target.value)}
        value={valueSearch}
      />
      <button>🔎</button>
    </StyledSearch>
  );
}
