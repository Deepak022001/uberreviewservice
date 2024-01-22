import React from "react";
import HomeScreen from "./Screen/Components/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Screen/Components/Login";

function App() {
const user=null;
  return (
    <div>
    <Router>
    {!user?(
       <Login/>
    ):(
      <div className="app">
        {/* <h1></h1> */}
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    )}
    </Router>    
    </div>
  );
}

export default App;
