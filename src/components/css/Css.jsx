import React from 'react'
import css from "../css/Css.module.css";


const Css = (props) => {
    return (
        <div className={css.container}>
            <div className={css.leftSide}>
                <div className={css.headings}>
                    <h1>CSS</h1>
                    <p>The language for styling web pages</p>

                </div>
                <div className={css.button}>
                    <div className={css.buttons} style={{background: "#79ff4d"}}>Learn CSS</div>
                    <div className={css.buttons} style={{background: "#ff9933"}}>Video Tutorial</div>
                    <div className={css.buttons} style={{background: "gray"}}>CSS References</div>
                    <div className={css.buttons} style={{background: "pink"}}>Get Certified</div>
                </div>
                
            </div>
            <div className={css.rightSide} style={{background: props.theme==="dark" ? "#1c1c1c" : "#e7e9eb", color: props.theme==="dark" ? "#fff" : "#000"}}>
                <div className={css.box}>
                    <h3>CSS Example:</h3>
                    <div className={css.texteditor} style={{background: props.theme==="dark" ? "#0d0d0de6" : "#fff"}}>
                        <pre>
                            &lt;!DOCTYPE html&gt;
                            <br />
                            &lt;html&gt;
                            <br />
                            &lt;title&gt;HTML Tutorial&lt;/title&gt;
                            <br />
                            &lt;body&gt;
                            <br />
                            &lt;h1&gt;This is a heading&lt;/h1&gt;
                            <br />
                            &lt;p&gt;This is a paragraph.&lt;/p&gt;
                            <br />
                            &lt;/body&gt;
                            <br />
                            &lt;/html&gt;
                        </pre>
                    </div>
                    <div className={css.buttons}>
                        Learn More
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Css
