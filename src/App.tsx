import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import { Name } from './Name';


type NameProps = {
    id: string;
}

function App() {
  const {id} = useParams();

  return (
      <Routes>
          <Route path="/" element={<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Write <code>/name/YOURNAME</code> and get Hi!
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
    </div>} />
        <Route path="/name/:id" element={<Name />}/>
      </Routes>
    
  );
}

export default App;

