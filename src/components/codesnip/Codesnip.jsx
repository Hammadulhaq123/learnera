import React from 'react'
import { useState } from 'react';
import css from "../codesnip/Codesnip.module.css";
import Image from "../codesnip/assets/pr1.png";
import Image2 from "../codesnip/assets/pr2.png";
import Image3 from "../codesnip/assets/pr3.png";
import { GrPrevious, GrNext } from "react-icons/gr";

const images = [Image, Image2, Image3];

const Codesnip = (props) => {

    const [imageCounter, setImageCounter] = useState(0);
    
    const toggleNext = () => {
        if (imageCounter === (images.length -1)) {
            setImageCounter(0);
        } else {
            setImageCounter(prevCounter => prevCounter + 1);
        }
    }

    const togglePrev = () => {
        if (imageCounter === (0)){
            setImageCounter(images.length - 1);
        } else {
            setImageCounter(prevCounter => prevCounter - 1)
        }
    }
    
    return (
        <>
            <div className={css.heading}>
                <h1 className={css.codehead}>How to Section</h1>
                <p className={css.codedes}>Code Snippet for HTML, CSS and JS</p>
                <p className={css.codedes2}>for example, How to create a slideshow:</p>
            </div>
            <div className={css.codesnip}>
                <div className={css.screen} style={{ background: props.theme === "dark" ? "#1c1c1c" : "#5bb1f8" }}>
                    <div className={css.top} style={{ background: props.theme === "dark" ? "#0d0d0d" : "#96caf5" }}>
                        <div className={css.topspan}>
                            <span className={css.red}></span><span className={css.yellow}></span><span className={css.green}></span>
                        </div>
                    <div className={css.topurl} style={{ background: props.theme === "dark" ? "#1c1c1c" : "#fff", color: props.theme === "dark" ? "#fff" : "#046ec4" }}>https://www.learnera.pages.dev</div>
                    </div>
                    <div className={css.codeimage}>
                        <button className={css.codeprev} onClick={togglePrev}><GrPrevious/></button>
                        <img id="codeimg" src={images[imageCounter]} alt="image" className={`codeimg ${css.codeimg}`}/>
                        <button className={css.codenext} onClick={toggleNext}><GrNext/></button>

                    </div>
                </div>
                <div className={css.bar} style={{ background: props.theme === "dark" ? "#0d0d0d" : "#5bb1f8" }}></div>
                <div className={css.base} style={{ background: props.theme === "dark" ? "#0d0d0d" : "#5bb1f8" }}><a href="#" >Learn How To</a></div>
            </div>
        </>
    )
}

export default Codesnip
