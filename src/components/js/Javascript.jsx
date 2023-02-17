import React from 'react'
import css from "../js/Javascript.module.css";


const Js = (props) => {
    return (
        <div className={css.container}>
            <div className={css.leftSide}>
                <div className={css.headings}>
                    <h1>Javascript</h1>
                    <p>The language for programming web pages</p>

                </div>
                <div className={css.button}>
                    <div className={css.buttons} style={{background: "#79ff4d"}}>Learn JS</div>
                    <div className={css.buttons} style={{background: "#ff9933"}}>Video Tutorial</div>
                    <div className={css.buttons} style={{background: "gray"}}>JS References</div>
                    <div className={css.buttons} style={{background: "pink"}}>Get Certified</div>
                </div>
                
            </div>
            <div className={css.rightSide} style={{background: props.theme==="dark" ? "#1c1c1c" : "#e7e9eb", color: props.theme==="dark" ? "#fff" : "#000"}}>
                <div className={css.box}>
                    <h3>Javascript Example:</h3>
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

export default Js
