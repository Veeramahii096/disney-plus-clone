import React from 'react';

import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={ <Login/>}>
         
        </Route>
        <Route path="/home" element={<Home/>}>
        
        </Route>
        <Route path ="/detail/:id" element={<Detail/>}>
          
        </Route>
       
      </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;