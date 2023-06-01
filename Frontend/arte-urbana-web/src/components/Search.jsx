import React from "react";

export function Search({ searchTerm, handleSearch }) {
  return (
    <>
      <div className="container p-5 d-flex justify-content-end mt-5">
        <img
          style={{ marginRight: "1.5%" }}
          src="../../assets/ico-search.svg"
          alt="search"
        />
        <input
          id="search"
          className="form-control"
          type="text"
          placeholder="escreva um titulo"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default Search;
