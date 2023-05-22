import React from "react";

export function ImageShow({ image }) {
  const { alt_description, urls } = image;
  const { small } = urls;
  return (
    <div>
      <img src={small} alt={alt_description}></img>
    </div>
  );
}
