import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Child from './child.js';

function App() {
  return (
    <div className="App">

      <Child coursename="React Course" instructor="Sir Aamir Pinger" sessiondays="Wednesday & Sunday" />
      <Child coursename="React Course" instructor="Sir Zia Khan" sessiondays="Tuesday & Saturday" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
   
    */}
    </div>
  );
}

export default App;
