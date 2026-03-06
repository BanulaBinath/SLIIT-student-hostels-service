import React from "react";
import './App.css';
import { BrowserRouter as  Routes, Route } from "react-router-dom";
import NomalHome from './Components/Home/nomalhome';
import Login from './Components/Home/login';
import Register from './Components/Home/register';

function App() {
  return (
   
      <div className="App">
        
        <React.Fragment>
          
            <Routes>
              <Route path="/" element={<NomalHome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          
        </React.Fragment>
       

      </div>
 
  );
}

export default App;