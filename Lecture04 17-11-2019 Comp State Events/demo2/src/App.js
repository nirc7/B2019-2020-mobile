import React from 'react';
//import logo from './logo.svg';
import './App.css';
import EFooter from './Components/EFooter.jsx';
import FCStudent from './Components/FCStudent';
import CCPerson from './Components/CCPerson';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FCStudent name="avi" grade={100}/>
        <FCStudent name="tami" grade={99}/>
        nir
        <CCPerson name="chrlaie"/>
       {EFooter}
      </header>
    </div>
  );
}

export default App;
