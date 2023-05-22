import React from "react";

import { searchImages } from "./api";

import { SearchBar } from "./comps/SearchBar";

// searchImages();

export function App() {
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );

  function handleSubmit(term) {
    // console.log(term);
    searchImages(term)
  }
}
