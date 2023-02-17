import React from 'react'
import css from "../html/Html.module.css";


const Html = (props) => {
    return (
        <>
            <svg style={{background:"#D9EEE1"}} width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill={props.theme==="dark" ? "#0d0d0d" : "#4db2ff"}></path>
            </svg>
            <div className={css.container}>
                <div className={css.leftSide}>
                    <div className={css.headings}>
                        <h1>HTML</h1>
                        <p>The language for building web pages</p>

                    </div>
                    <div className={css.button}>
                        <div className={css.buttons} style={{ background: "#79ff4d" }}>Learn HTML</div>
                        <div className={css.buttons} style={{ background: "#ff9933" }}>Video Tutorial</div>
                        <div className={css.buttons} style={{ background: "gray" }}>HTML References</div>
                        <div className={css.buttons} style={{ background: "pink" }}>Get Certified</div>
                    </div>

                </div>
                <div className={css.rightSide} style={{ background: props.theme === "dark" ? "#1c1c1c" : "#e7e9eb", color: props.theme === "dark" ? "#fff" : "#000" }}>
                    <div className={css.box}>
                        <h3>HTML Example:</h3>
                        <div className={css.texteditor} style={{ background: props.theme === "dark" ? "#0d0d0de6" : "#fff" }}>
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
        </>
    )
}

export default Html
