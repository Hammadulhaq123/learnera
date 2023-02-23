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
                    <div className={css.buttons} style={{ background: "#79ff4d" }}>Learn JS</div>
                    <div className={css.buttons} style={{ background: "#ff9933" }}>Video Tutorial</div>
                    <div className={css.buttons} style={{ background: "gray" }}>JS References</div>
                    <div className={css.buttons} style={{ background: "pink" }}>Get Certified</div>
                </div>

            </div>
            <div className={css.rightSide} style={{ background: props.theme === "dark" ? "#1c1c1c" : "#e7e9eb", color: props.theme === "dark" ? "#fff" : "#000" }}>
                <div className={css.box}>
                    <h3>Javascript Example:</h3>
                    <div id={`texteditor1 ${css.texteditor1}`} className={` ${css.texteditor}`} style={{ background: props.theme === "dark" ? "#0d0d0de6" : "#fff" }}>
                    <pre>
                                &lt;button onclick="myFunction()"&gt;
                                <br />
                                <br />

                                &lt;script&gt;
                                <br />
                                <br />
                                const myFunnction = () =&gt; {
                                    console.log("Hello World")
                                }
                                <br />
                                <br />
                                &lt;/script&gt;
                                <br />
                                <br />
                                &lt;/button&gt;
                            </pre>
                    </div>
                    <div className={css.buttons} style={{ color: props.theme === "dark" ? "#fff" : "#000" }}>
                        Learn More
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Js
