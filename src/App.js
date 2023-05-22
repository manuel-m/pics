import React from "react";
import { useState } from "react";

import { searchImages } from "./api";
import { ImageList } from "./comps/ImageList";

import { SearchBar } from "./comps/SearchBar";

// searchImages();

export function App() {
  const [images, setImages] = useState([]);
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );

  async function handleSubmit(term) {
    // console.log(term);
    const fetchedImages = await searchImages(term);
    setImages(fetchedImages);
  }
}
