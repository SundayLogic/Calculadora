import React from "react";
import Calculadora from "./components/organisms/Calculadora";

const App: React.FC = () => {

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Calculadora/>
    </div>
  );
};

export default App;
