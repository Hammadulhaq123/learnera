import React from 'react'
import css from "../template/Template.module.css";
import Template1 from "../template/assets/pr1.png"
import { FcPrevious, FcNext } from "react-icons/fc";



const Template = () => {
  return (
    <>
      <div className={css.template}>
        <div className={css.headings}>
          <h1 className={css.temphead}>Browse Free Web Templates</h1>
          <p>Browse our selection of <b>free</b> responsive HTML Templates</p>
          </div>
          <div className={css.tempcarousel}>
            <button className={css.tempnext}><FcPrevious/></button>
            <div className={`tempimage ${css.tempimage}`}>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg} ${css.active}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>
              <img src={Template1} alt="Template" className={`tempimg ${css.tempimg}`}/>

            </div>
            <button className={css.tempprev}><FcNext /></button>

          </div>
          <a href="#"><button className={css.tempbtn}>Browse Templates</button></a>

        
      </div>
    </>
  )
}

export default Template
