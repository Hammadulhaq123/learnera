import React from 'react'
import css from "../kickstart/Kick.module.css"


const Kick = () => {
    return (
        <div className={css.kick}>
            <div className={css.kickcont}>
                <h1 className={css.kickname}>Kickstart your career</h1>
                <p className={css.kickdes}>Get certified by completing a course</p>
                <button className={css.kickbutton}>Get Started</button>
            </div>
            <svg id={css.w3certarrow} style={{width:"220px", height:"280px", position:"absolute", bottom:"8vh", right:"320px", zIndex:"99"}} viewBox="0 0 170 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.7747 42.7064C9.7747 42.7064 19.5575 77.2951 44.4558 84.8113C62.0225 90.1142 81.0061 80.1196 77.791 68.3309C76.0904 62.0955 69.0574 62.4735 65.5106 65.8444C59.1003 71.9368 67.8591 89.7423 77.9205 96.1324C112.816 118.295 161.943 84.5867 161.943 84.5867" stroke="white" stroke-width="2"  stroke-linecap="round"></path>
                <path d="M159.804 93.8429L162.704 84.4917L152.715 80.8293" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <svg id="w3_cert_badge" style={{width:"300px", height:"300px",display:"flex", alignItems:"center",justifyContent:"center", position:"absolute", bottom:"0vh", right:"20px"}} dataName="w3_cert_badge" xmlns="./logo.png" viewBox="0 0 300 300"><defs></defs><text className={css.cls2} transform="translate(93.54 63.89) rotate(-29.5)">L</text><text className={css.cls2} transform="translate(107.13 56.35) rotate(-20.8)">E</text><text className={css.cls2} transform="matrix(0.98, -0.21, 0.21, 0.98, 121.68, 50.97)">A</text><text className={css.cls2} transform="translate(136.89 47.84) rotate(-3.47)">R</text><text className={css.cls2} transform="translate(152.39 47.03) rotate(5.12)">N</text><text className={css.cls2} transform="translate(167.85 48.54) rotate(13.72)">E</text><text className={css.cls2} transform="translate(182.89 52.35) rotate(22.34)">R</text><text className={css.cls2} transform="matrix(0.86, 0.52, -0.52, 0.86, 197.18, 58.36)">A</text><path fill="#ffffff" d="M19.3125,128.78125l0-34.265625l7.265625,0l0,28.265625l13.8984375,0l0,6l-21.1640625,0z M69.463359375,128.78125l-19.734375,0l0-34.265625l19.734375,0l0,5.953125l-12.46875,0l0,7.5234375l11.6015625,0l0,5.953125l-11.6015625,0l0,8.8359375l12.46875,0l0,6z M100.88765625,128.78125l-2.484375-8.15625l-12.4921875,0l-2.484375,8.15625l-7.828125,0l12.09375-34.40625l8.8828125,0l12.140625,34.40625l-7.828125,0z M96.66890625,114.53125q-3.4453125-11.0859375-3.87890625-12.5390625t-0.62109375-2.296875q-0.7734375,3-4.4296875,14.8359375l8.9296875,0z M123.593203125,109.7265625l2.34375,0q3.4453125,0,5.0859375-1.1484375t1.640625-3.609375q0-2.4375-1.67578125-3.46875t-5.19140625-1.03125l-2.203125,0l0,9.2578125z M123.593203125,115.6328125l0,13.1484375l-7.265625,0l0-34.265625l9.984375,0q6.984375,0,10.3359375,2.54296875t3.3515625,7.72265625q0,3.0234375-1.6640625,5.37890625t-4.7109375,3.69140625q7.734375,11.5546875,10.078125,14.9296875l-8.0625,0l-8.1796875-13.1484375l-3.8671875,0z M181.7128125,128.78125l-9.234375,0l-14.90625-25.921875l-0.2109375,0q0.4453125,6.8671875,0.4453125,9.796875l0,16.125l-6.4921875,0l0-34.265625l9.1640625,0l14.8828125,25.6640625l0.1640625,0q-0.3515625-6.6796875-0.3515625-9.4453125l0-16.21875l6.5390625,0l0,34.265625z M213.371484375,128.78125l-19.734375,0l0-34.265625l19.734375,0l0,5.953125l-12.46875,0l0,7.5234375l11.6015625,0l0,5.953125l-11.6015625,0l0,8.8359375l12.46875,0l0,6z M231.08484375,109.7265625l2.34375,0q3.4453125,0,5.0859375-1.1484375t1.640625-3.609375q0-2.4375-1.67578125-3.46875t-5.19140625-1.03125l-2.203125,0l0,9.2578125z M231.08484375,115.6328125l0,13.1484375l-7.265625,0l0-34.265625l9.984375,0q6.984375,0,10.3359375,2.54296875t3.3515625,7.72265625q0,3.0234375-1.6640625,5.37890625t-4.7109375,3.69140625q7.734375,11.5546875,10.078125,14.9296875l-8.0625,0l-8.1796875-13.1484375l-3.8671875,0z M279.782578125,128.78125l-2.484375-8.15625l-12.4921875,0l-2.484375,8.15625l-7.828125,0l12.09375-34.40625l8.8828125,0l12.140625,34.40625l-7.828125,0z M275.563828125,114.53125q-3.4453125-11.0859375-3.87890625-12.5390625t-0.62109375-2.296875q-0.7734375,3-4.4296875,14.8359375l8.9296875,0z"/></svg>

        </div>
    )
}
export default Kick