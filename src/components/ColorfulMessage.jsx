import React from "react";

const ColorfulMessage = (props) => {
  const {color, children} = props;
  const contentStyle = {
    // property名と変数名が同じ場合はproperty名を省略可能
    color,
    fontSize: '18px'
  };

  return(
    <p style={contentStyle}>{children}</p>
  );
};

export default ColorfulMessage;