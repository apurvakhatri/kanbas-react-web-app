import React from 'react';
import logo from './logo.svg';
import Labs from "./Labs";
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";

//import './App.css';

function App() {
  return (
  <HashRouter>
      <div>
        <Routes>
            <Route path="/Labs/*" element={<Labs/>}/>
            <Route path="/Kanbas/*" element={<Kanbas/>}/>
            <Route path="/Labs/a3/*" element={<HelloWorld/>}/>
        </Routes>
      </div>
  </HashRouter>
  );
}
export default App;
