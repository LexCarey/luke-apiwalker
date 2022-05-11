import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import './App.css';
import SWDisplay from './components/SWDisplay';
import SWForm from './components/SWForm';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <h1>Star Wars Search Engine</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SWForm />}/>
          <Route path="/:noun/:index" element={<div><SWForm /> <SWDisplay /></div>} />
          <Route path="*" element={<div><SWForm /> <Error /></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
