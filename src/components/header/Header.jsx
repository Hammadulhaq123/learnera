import React from 'react';
import css from "../header/Header.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgDarkMode, CgSearch, CgClose } from "react-icons/cg";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserTie, FaHamburger } from "react-icons/fa"
import { Link } from "react-router-dom";
const Header = (props) => {
    const opensub3 = () => {
        const sub1 = document.querySelector(".sublinks3");
        if (sub1.style.display==="none") {
            sub1.style.display = "flex";
        } else{
            sub1.style.display = "none";
        }
    }
    const opensub2 = () => {
        const sub1 = document.querySelector(".sublinks2");
        if (sub1.style.display==="none") {
            sub1.style.display = "flex";
        } else{
            sub1.style.display = "none";
        }
    }
    const opensub1 = () => {
        const sub1 = document.querySelector(".sublinks1");
        if (sub1.style.display==="none") {
            sub1.style.display = "flex";
        } else{
            sub1.style.display = "none";
        }
    }
    const openMobCont = () => {
        const openMobContainer = document.querySelector(".dropMobCont");
        if (openMobContainer.style.display === "none") {
            openMobContainer.style.display = "flex";
        } else {
            openMobContainer.style.display = "none"
        }
    }
    const opencont = () => {
        console.log("Open")
        const openitem = document.querySelector(".dropdown");
        openitem.style.display = "flex";

    }
    function close() {
        console.log("Close")
        let closeitem = document.querySelector(".dropdown");
        closeitem.style.display = "none";
    }
    return (
        <div className={css.wrapper} style={{ background: props.theme === "dark" ? "#1c1c1c" : "#fff", color: props.theme === "dark" ? "#fff" : "#598bc9" }}>
            <a href="#"><img src="./logo.png" className={css.logo} /></a>
            <div className={css.links}>
                <ul className={css.nav_links}>
                    <li><a href="#">HOME</a></li>
                    <li>
                        <a href="#" onClick={opencont}> TUTORIALS <IoMdArrowDropdown /></a>

                    </li>
                    <li><a href="#">REFERENCES <IoMdArrowDropdown /></a></li>
                    <li><a href="#">EXERCISES <IoMdArrowDropdown /></a></li>
                </ul>
            </div>

            {/* Big screen dropdown */}
            <div className={`dropdown ${css.dropdown}`} style={{ background: props.theme === "dark" ? "#1c1c1c" : "#fff", color: props.theme === "dark" ? "#598bc9" : "#598bc9" }}>
                <div className={css.droptop}>
                    <h2 className={css.drophead}>Tutorial</h2>
                    <button className={css.dropclose}><CgClose onClick={close} /></button>
                </div>
                <div className={css.dropcont}>
                    <div className={css.dropcol}>
                        <h2>HTML</h2>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>


                    </div>
                    <div className={css.dropcol}>
                        <h2>HTML</h2>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>



                    </div>
                    <div className={css.dropcol}>
                        <h2>HTML</h2>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>


                    </div>
                    <div className={css.dropcol}>
                        <h2>HTML</h2>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>
                        <a href="#">HTML syntax</a>

                    </div>
                </div>
            </div>

            {/* Mobile device dropdown */}
            <div className={`dropMobCont ${css.dropMobCont}`} style={{ background: props.theme === "dark" ? "#1c1c1c" : "#fff", color: props.theme === "dark" ? "#598bc9" : "#598bc9" }}>
                <div className={css.droplist}>
                    <ul>
                        <li>Home</li>
                        <li onClick={opensub1}>Tutorials <IoMdArrowDropdown />
                            <ul className={`sublinks1 ${css.sublinks}`} style={{background: props.theme==="dark" ? "#1c1c1c" : "#fff" , color : props.theme === "dark" ? "#598bc9" : "#598bc9"}}>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">Javascript</a></li>
                                <li><a href="#">React</a></li>
                                <li><a href="#">Tailwind</a></li>
                                <li><a href="#">Bootstrap</a></li>
                                <li><a href="#">Angular</a></li>
                                <li><a href="#">Python</a></li>
                                <li><a href="#">Ruby</a></li>
                                <li><a href="#">Php</a></li>
                                <li><a href="#">Kotlin</a></li>
                                <li><a href="#">MySql</a></li>
                                <li><a href="#">Cyber</a></li>
                                <li><a href="#">Rasberry Pie</a></li>
                            </ul>
                        </li>
                        <li onClick={opensub2}>References <IoMdArrowDropdown />
                            <ul className={`sublinks2 ${css.sublinks}`} style={{background: props.theme==="dark" ? "#1c1c1c" : "#fff" , color : props.theme === "dark" ? "#598bc9" : "#598bc9"}}>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">Javascript</a></li>
                                <li><a href="#">React</a></li>
                                <li><a href="#">Tailwind</a></li>
                                <li><a href="#">Bootstrap</a></li>
                                <li><a href="#">Angular</a></li>
                                <li><a href="#">Python</a></li>
                                <li><a href="#">Ruby</a></li>
                                <li><a href="#">Php</a></li>
                                <li><a href="#">Kotlin</a></li>
                                <li><a href="#">MySql</a></li>
                                <li><a href="#">Cyber</a></li>
                                <li><a href="#">Rasberry Pie</a></li>
                            </ul></li>
                        <li onClick={opensub3}>Exercises <IoMdArrowDropdown />
                            <ul className={`sublinks3 ${css.sublinks}`} style={{background: props.theme==="dark" ? "#1c1c1c" : "#fff" , color : props.theme === "dark" ? "#598bc9" : "#598bc9"}}>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">Javascript</a></li>
                                <li><a href="#">React</a></li>
                                <li><a href="#">Tailwind</a></li>
                                <li><a href="#">Bootstrap</a></li>
                                <li><a href="#">Angular</a></li>
                                <li><a href="#">Python</a></li>
                                <li><a href="#">Ruby</a></li>
                                <li><a href="#">Php</a></li>
                                <li><a href="#">Kotlin</a></li>
                                <li><a href="#">MySql</a></li>
                                <li><a href="#">Cyber</a></li>
                                <li><a href="#">Rasberry Pie</a></li>
                            </ul></li>
                    </ul>
                </div>

            </div>


            <div className={css.others}>
                <div className={css.pro}>
                    Pro
                </div>
                <div className={css.certify}>Get Certified</div>
                <div className={css.useful}>
                    {/* <BsFillChatDotsFill  className={css.icons}/> */}
                    <CgDarkMode className={css.icons} onClick={props.toggleTheme} />
                    <CgSearch className={css.icons} />
                </div>
            </div>
            <div className={css.user}>
                <FaUserTie className={css.usericon} />
                <div className={`hamburger ${css.hamburger}`} onClick={openMobCont}><FaHamburger /></div>

            </div>
        </div>
    )
}

export default Header
