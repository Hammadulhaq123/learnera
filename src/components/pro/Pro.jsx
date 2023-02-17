import React from 'react'
import css from "../pro/Pro.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs"

const Pro = () => {
  return (
    <div className={css.pro}>
      <h1 className={css.proheading}>Become a PRO User</h1>
      <p className={css.prodes}>And unlock powerfull features:</p>
      <div className={css.profeature}>
        <div className={css.profet}><BsFillCheckCircleFill className={css.proicon}/>Browse W3Schools without ads</div>
        <div className={css.profet}><BsFillCheckCircleFill className={css.proicon}/>Ghost Writer (Includes AI Coding)</div>
        <div className={css.profet}><BsFillCheckCircleFill className={css.proicon}/>Access to our Video Tutorial
      </div>
      <a href="#"><button className={css.probtn}>Learn More</button></a>


      </div>
    </div>
  )
}

export default Pro
