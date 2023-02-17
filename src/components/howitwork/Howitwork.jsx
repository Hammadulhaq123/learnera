import React from 'react'
import css from "../howitwork/Howitwork.module.css";
import Image from "../howitwork/howitworks.png";

const Howitwork = () => {
  return (
    <>
    <div className={css.bg}>
      <img src={Image} alt="howitworks" width="80%"/>
      <a href="#"><button className={css.howbtn}>Learn More</button></a>
    </div>
    </>
  )
}

export default Howitwork
