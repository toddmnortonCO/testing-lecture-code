import React from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Todos />
    </div>
  );
}

export default App;
