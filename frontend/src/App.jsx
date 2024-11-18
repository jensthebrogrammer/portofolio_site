import { useState, useEffect } from 'react'
import { Test } from './modules/testing';
import { HashRouter as Router, Routes, Route, json } from 'react-router-dom';
import './App.css'
import Homepage from './modules/homepage';
import MijnProjecten from './modules/cards';
import Info from './modules/info';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />

          <Route 
            path="/testing_bootstrap"
            element={<Test />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;
