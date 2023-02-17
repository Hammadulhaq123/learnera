import React from 'react'
// import { Lang } from "../../utils/data"
import css from "../endcont/Endcont.module.css";


const Endcont = () => {
    return (
        <>
            <div className={css.end}>
                <a href='#'>
                    <div style={{ background: "#96d4d4"}}  className={css.endcont}>
                        <span className={css.endname}>Excel</span>
                    </div>
                </a>
                <a href='#'>
                    <div style={{ background: "#fff4a3"}}  className={css.endcont}>
                        <span className={css.endname}>Google Sheets</span>
                    </div>
                </a>
                <a href='#'>
                    <div style={{ background: "#ffc0c7"}}  className={css.endcont}>
                        <span className={css.endname}>Machine Learning</span>
                    </div>
                </a>
                <a href='#'>
                    <div style={{ background: "#f3ecea"}}  className={css.endcont}>
                        <span className={css.endname}>Artificial Intelligence</span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Endcont
