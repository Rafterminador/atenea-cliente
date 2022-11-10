import React from "react";

const Image = (props) => {
  return (
    <div
      className={`image ${props.type === 1 ? "image-type-1" : "image-type-2"}`}
    >
      <img className={`${props.className}`} src={props.image} alt={props.alt} />
    </div>
  );
};

export default Image;
