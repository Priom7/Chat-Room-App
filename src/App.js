import React from "react";

import "./App.css";
import Header from "./components/header/header/Header";
import Sidebar from "./components/header/sidebar/Sidebar";

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <div className='app__body'>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
