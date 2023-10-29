import React from "react";
import ColorPicker from "./ColorPicker";

const App = () => {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33",'blue','coral','wheat','violet','orange','crimson','gray','brown','skyblue','darkviolet','darkgreen','white'];

  return (
    <div className="app">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
