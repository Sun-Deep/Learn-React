import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <p>{this.props.name}</p> */}
        <Clock />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - By Sandeep Pokhrel
        </a>
      </header>
    </div>
  );
}

export default App;
