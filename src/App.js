import React, { useState } from 'react';
import './App.css';

function App() {
  const [programName, setProgramName] = useState("ByteWise Fellowship Program");

  const changeProgramName = () => {
    setProgramName("ByteWise Fellowship Program");
  };

  return (
    <div className="App">
      <h1>This repository is about {programName}</h1>
      <button onClick={changeProgramName}>Change Program Name</button>
    </div>
  );
}

export default App;
