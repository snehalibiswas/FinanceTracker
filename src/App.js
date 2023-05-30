import React from 'react';
import './App.css';
import Home from './Pages/Home';
import ExpenseDashboard from './Pages/ExpenseDashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expense" element={<ExpenseDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
