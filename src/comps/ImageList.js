import React from "react";

import { ImageShow } from "./ImageShow";

export function ImageList({ images }) {
    const renderedImages = images.map(function(image){
        // console.log(image);
        return <ImageShow key={image.id} image={image}/>

    })
  return <div>{renderedImages}</div>;
}
