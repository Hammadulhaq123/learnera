import React from 'react'
import css from "../html/Html.module.css";


const Html = () => {
    return (
        <div className={css.container}>
            <div className={css.leftSide}>
                <h1>HTML</h1>
                <p>The language for building web pages</p>
                <div className={css.buttons} style={{background: "#79ff4d"}}>Learn HTML</div>
                <div className={css.buttons} style={{background: "#ff9933"}}>Video Tutorial</div>
                <div className={css.buttons} style={{background: "gray"}}>HTML References</div>
                <div className={css.buttons} style={{background: "pink"}}>Get Certified</div>
            </div>
            <div className={css.rightSide}>
                <div className={css.box}>
                    <h3>HTML Example:</h3>
                    <div className={css.texteditor}>
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

export default Html
