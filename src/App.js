import React from 'react';
import Blockmain from './components/Blockmain.js'
import Block from './components/block/Block.js'
import './App.css';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Blockmain />
          <Block />
        </div>
      </div>
    </>
  );
}

export default App;
