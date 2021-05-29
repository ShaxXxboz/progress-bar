import React from "react";
import ProgressBar from "../ProgressBar";
import stepsData from "../../../stepsData";

const App = () => {
  return (
    <div>
      <ProgressBar stepsData={stepsData} />
    </div>
  );
};

export default App;
