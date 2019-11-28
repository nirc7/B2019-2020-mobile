import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CCCalculator from './Components/CCCalculator';
import CCChild from './Components/CCChild';


function App() {

  function getData(data) {
    alert(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        nir2
      <CCCalculator />

        <CCChild sendData={getData}/>
      </header>
    </div>
  );
}

export default App;
