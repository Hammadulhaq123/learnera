import React from 'react';
import css from "../header/Header.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgDarkMode, CgSearch } from "react-icons/cg";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa"
const Header = (props) => {
  return (
    <div className={css.wrapper} style={{background: props.theme==="dark" ? "#1c1c1c" : "#fff", color: props.theme==="dark" ? "#fff" : "#598bc9"}}>
        <img src="./logo.png" className={css.logo}/>
        <div className={css.links}>
            <ul className={css.nav_links}>
                <li>HOME</li>
                <li>TUTORIALS <IoMdArrowDropdown/></li>
                <li>REFERENCES <IoMdArrowDropdown/></li>
                <li>EXERCISES <IoMdArrowDropdown/></li>
            </ul>
        </div>
        <div className={css.others}>
            <div className={css.pro}>
                Pro
            </div>
            <div className={css.certify}>Get Certified</div>
            <div className={css.useful}>
                {/* <BsFillChatDotsFill  className={css.icons}/> */}
                <CgDarkMode  className={css.icons} onClick={props.toggleTheme}/>
                <CgSearch  className={css.icons}/>
            </div>
        </div>
        <div className={css.user}>
            <FaUserTie className={css.usericon}/>
        </div>
    </div>
  )
}

export default Header
