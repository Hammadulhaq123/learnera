import React from 'react'
import { langs } from "../../utils/data"
import css from "../langs/Lang.module.css";


const Langs = () => {
  return (
    <>
    <div className={css.langs}>
      {langs.map((lang, i) => {
              return (
                <a href="#">
                <div className={`flexCenter ${css.langcont}`} style={{background: lang.bg}}>
                    <span className={css.langname}>{lang.name}</span>
                </div>
                </a>
              );
            })}
    </div>
    </>
  )
}

export default Langs
