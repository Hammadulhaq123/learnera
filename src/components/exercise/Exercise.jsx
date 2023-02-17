import React from 'react'
import css from "../exercise/Exercise.module.css";


const Exercise = () => {
  return (
    <div className={css.exercise}>
        <h1 className={css.exercisename}>Exercises and Cheatsheets</h1>
        <p className={css.exercisedes}>Test Your Skills</p>
        <div className={css.exercisecont}>
            <a href="#"><div className={css.exercisechild} style={{background:"#046ec4"}}>Exercises</div></a>
            <a href="#"><div className={css.exercisechild} style={{background:"#4db2ff", color:"#fff"}}>CheatSheets</div></a>

        </div>
    </div>
  )
}

export default Exercise
