import React, { Component, useState, UseEffect, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Registration from './pages/Registration';
import NavBar from './components/NavBar/Navigation';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;