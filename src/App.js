import React, { useState } from 'react';
import Calculate from './screens/Calculate';
import './App.css'; 

function App() {
  const [oScore, setOScore] = useState(0);

  return (
    <div className="App">
      <h1 className="title">LOVEMETER</h1>
      <Calculate oScore={oScore} setOScore={setOScore} />
    </div>
  );
}

export default App;

