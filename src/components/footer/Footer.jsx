import React from 'react';
import css from "../footer/Footer.module.css";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGamepad, FaThumbsUp } from "react-icons/fa"
const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.footerfirst}>
                <div className={css.buttonholder}>
                    <div className={css.smallbtn}>
                        <a href="#"><button>Quizzes</button></a>
                        <a href="#"><button>Exercises</button></a>
                        <a href="#"><button>Certificates</button></a>
                    </div>
                    <div className={css.largebtn}>
                        <a href="#"><button>Upgrade</button></a>
                        <a href="#"><button>Spaces</button></a>
                        <a href="#"><button>Support</button></a>
                        <a href="#"><button>Newsletter</button></a>
                    </div>
                </div>
                <div className={css.extraforum}>
                    <a href="#" className={css.forumright}>FORUM</a> 
                    <a href="#" className={css.aboutleft}> ABOUT</a>
                </div>
            </div>
            <div className={css.footericons}>

                <div className={css.footericon}><FaFacebookSquare/></div>
                <div className={css.footericon}><FaInstagramSquare/></div>
                <div className={css.footericon}><FaLinkedin/></div>
                <div className={css.footericon}><FaGamepad/></div>

            </div>
            <div className={css.footerdes}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora cum nemo, mollitia, fuga ullam velit culpa porro rem soluta saepe exercitationem eius dolorem nisi unde qui doloribus facilis earum ratione quam voluptatem. Fugiat quos vitae veniam numquam, autem est reprehenderit praesentium. Laudantium incidunt maiores dolores voluptatibus accusantium iure distinctio saepe. <a href="https://hammad.pages.dev">Lorem ipsum dolor sit amet consectetur.</a> </div>
            <div className={css.footerlike}>
                <FaThumbsUp />

            </div>
        </div>
    )
}

export default Footer
