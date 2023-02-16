
import './App.css';
import Header from './components/header/Header';
import React, { useState } from "react";
import Hero from "./components/hero/Hero";
import Html from "./components/html/Html";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme==="dark") {
      setTheme("light");
    } else{
      setTheme("dark");
    }
  }
  return (
    <>
      <div className='container'>
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Hero theme={theme} />
        <Html theme={theme} />
      </div>
    </>
  );
}

export default App;
