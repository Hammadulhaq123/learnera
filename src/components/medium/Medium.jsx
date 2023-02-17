import React from 'react'
// import { Lang } from "../../utils/data"
import css from "../medium/Medium.module.css";


const Medium = () => {
    return (
        <>
            <div className={css.medium}>
                <a href='#'>
                    <div style={{ background: "#ffc0c7"}}  className={css.medcont}>
                        <span className={css.medname}>C</span>
                    </div>
                </a>
                <a href='#'>
                    <div style={{ background: "#fff4a3"}}  className={css.medcont}>
                        <span className={css.medname}>C#</span>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Medium
