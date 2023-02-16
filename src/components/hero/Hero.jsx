import React from 'react';
import css from "../hero/Hero.module.css";
import { ImSearch } from "react-icons/im";


const Hero = (props) => {
  return (
    <div className={css.wrap} style={{background: props.theme==="dark" ? "#0d0d0d" : "#598bc9"}}>
        <div className={css.content}>
            <h1>Learn to Code</h1>
            <h4>With the world's largest web developer site.</h4>
            <div className={css.search}>
                <input type="text" className={css.input}placeholder='Search our tutorials e.g. HTML'/>
                <button type="submit"><ImSearch /></button>
            </div>
            <a href="https://www.facebook.com">Not Sure Where To Begin?</a>
        </div>
    </div>
  )
}

export default Hero
