import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
      <Header/>
      <Sidebar/>
      </div>
    </BrowserRouter>

  );
}

export default App;
