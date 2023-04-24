import React, { memo } from "react";
import "./Image.css";
import { IMAGES } from "../../constants";

const Image = (props) => {
  const { index, imageFileName, imageAlt, imageName } = { ...props };

  /*Function to expand the image name on clicking the ellipsis in the UI */
  const expandTitle = (index) => {
    const element = document.getElementById(index);
    if (element) {
      element.style.maxWidth = "none";
      element.style.whiteSpace = "normal";
    }
  };

  return (
    <>
      <img
        className="movie-poster"
        src={`Slices/${imageFileName}`}
        alt={imageAlt}
        onError={(e) => (e.target.src = IMAGES.MISSING_POSTER_IMAGE)}
        onLoad={(e) => {
          e.target.style.opacity = 1;
          e.target.style.transform = "translateY(0)";
        }}
      />
      <div
        id={imageName + index}
        className="movie-title"
        onClick={() => expandTitle(imageName + index)}
      >
        <span>{imageName}</span>
      </div>
    </>
  );
};
export default memo(Image);