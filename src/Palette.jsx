import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
const Palette = ({ palette }) => {
  const colorBoxes = palette.colors.map((color) => {
    return <ColorBox background={color.color} name={color.name} />;
  });
  return (
    <div className="palette">
      {/* navbar goes here */}
      <div className="palette-color">
        {/* bunch of color boxes */}
        {colorBoxes}
      </div>
      {/* footer eventualy */}
    </div>
  );
};

export default Palette;
