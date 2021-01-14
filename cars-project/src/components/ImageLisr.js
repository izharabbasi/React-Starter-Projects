import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

function ImageLisr({ images }) {
  const image = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{image}</div>;
}

export default ImageLisr;
