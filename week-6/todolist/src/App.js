import React from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Simple Todolist</h1>
      </div>
      <Todolist />
    </div>
  );
}

export default App;
