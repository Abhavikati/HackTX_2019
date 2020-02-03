import React, {useState} from 'react';
import './App.css';
import orglogo from "./logo.svg"
import Banner from "./components/BackgroundBanner"

function App() {
  return(
    <div className = "App">
      <header className = "App-header">
        <Banner src = {orglogo}/>
        <p>
          Event Name
        </p>
      </header>
    </div>
  )
}

export default App;