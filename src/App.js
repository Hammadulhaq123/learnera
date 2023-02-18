
import './App.css';
import Header from './components/header/Header';
import React, { useState, useEffect } from "react";
import Hero from "./components/hero/Hero";
import Html from "./components/html/Html";
import Css from "./components/css/Css";
import Js from "./components/js/Javascript";
import Python from "./components/python/Python";
import Sql from "./components/sql/Sql";
import Biggies from "./components/biggies/Biggies";
import Medium from "./components/medium/Medium";
import Lang from "./components/langs/Lang"
import Endcont from "./components/endcont/Endcont";
import Howitwork from "./components/howitwork/Howitwork";
import Track from "./components/track/Track";
import Pro from "./components/pro/Pro";
import Exercise from "./components/exercise/Exercise";
import Template from "./components/template/Template";
import Kick from "./components/kickstart/Kick";
import Codesnip from "./components/codesnip/Codesnip";
import Footer from "./components/footer/Footer"


function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme==="dark") {
      setTheme("light");
    } else{
      setTheme("dark");
    }
  }
  useEffect(()=>{
    console.log("this")
  })
  return (
    <>
      <div className='container'>
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Hero theme={theme} />
        <Html theme={theme} />
        <Css theme={theme} />
        <Js theme={theme} />
        <Python theme={theme} />
        <Sql theme={theme} />
        <Biggies theme={theme} />
        <Medium theme={theme} />
        <Lang theme={theme} />
        <Endcont theme={theme} />
        <Howitwork theme={theme}/>
        <Track theme={theme} />
        <Pro theme={theme} />
        <Exercise theme={theme} />
        <Template theme={theme} />
        <Kick theme={theme} />
        <Codesnip theme={theme}/>
        <Footer theme={theme} />
      </div>
    </>
  );
}

export default App;
