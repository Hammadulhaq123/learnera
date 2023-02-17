import React from 'react';
import Image from "./track.png";
import css from "../track/Track.module.css"

const Track = (props) => {
  return (
    <div className={css.track}>
      <div className={css.trackhead}>
        <h1 className={css.trackheading}>My Learning</h1>
        <p className={css.trackpara}>Track your progress with our free "My Learning" program </p>
        <p className={css.trackpara}>Log into your account, and start earning points</p>
      </div>
      <img src={Image} alt="TrackImage" className={css.trackimg}/>
      <a href="#"><button className={css.trackbtn}>Learn More</button></a>

    </div>
  )
}
export default Track
