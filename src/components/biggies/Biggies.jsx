import React from 'react'
import { comments } from "../../utils/data"
import css from "../biggies/Biggies.module.css";


const Biggies = () => {
  return (
    <>
    <div className={css.biggies}>
      {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.bigcont}`} style={{background: comment.bg}}>
                    <span className={css.bigname}>{comment.name}</span>
                    <p className={css.bigdes}>{comment.description}</p>
                    <button className={css.bigbutton}><a href="#">{comment.button}</a></button>
                </div>
              );
            })}
    </div>
    </>
  )
}

export default Biggies
