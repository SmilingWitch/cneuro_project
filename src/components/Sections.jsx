import style from "../../public/assets/styles/Sections.module.css"
import { BsTools } from "react-icons/bs";
import { BsImages } from "react-icons/bs";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Sections(){

    useEffect(() => {
        AOS.init({
          duration:1500
      });
        
  
      }, []);

    
    return(
        <div className={style.cont}>
            <div className={style.steps}>
                <div className={`${style.section1} ${style.section}`}>
                    <div className={style.line1} data-aos="zoom-in"></div>
                    <div className={style.icon} data-aos="zoom-in">< BsTools/></div>
                    <div className={style.line2} data-aos="zoom-in"></div>
                </div>
                <div className={`${style.section2} ${style.section}`}>
                    <div className={style.line1} data-aos="zoom-in"></div>
                    <div className={style.icon} >< BsImages data-aos="zoom-in"/></div>
                    <div className={style.line2} data-aos="zoom-in"></div>
                </div>
                <div className={`${style.section3} ${style.section}`}>
                    <div className={style.line1} data-aos="zoom-in"></div>
                    <div className={style.icon} data-aos="zoom-in"><RiComputerLine/></div>
                    <div className={style.line2} data-aos="zoom-in"></div>
                </div>
                <div className={`${style.section4} ${style.section}`}>
                    <div className={style.line1} data-aos="zoom-in"></div>
                    <div className={style.icon} data-aos="zoom-in"><AiOutlineMedicineBox/></div>
                    <div className={style.line2} data-aos="zoom-in"></div>
                </div>
            </div>
            <div className={style.sectionBx}>
                <section className={style.header}  id="section2"  data-aos="zoom-out-up">
                    <h2> Our project develops personalized medicine models and tools to analyze disease dynamics in COVID-19 patients, updating their condition in real time.</h2>
                </section>

                <section className={style.header}   data-aos="zoom-out-up">
                     <h2> We facilitate patient management and resource allocation through intelligent software methods that quantify lung conditions on chest images.</h2>
                </section>

                <section className={style.header}  data-aos="zoom-out-up">
                     <h2> In addition, we use artificial intelligence to predict disease trajectory by combining health records and image analysis!</h2>
                </section>

                <section className={style.header}   data-aos="zoom-out-up">
                     <h2>We help physicians in Cuban public hospitals make informed decisions and take full advantage of available resources and technologies to save more lives. </h2>
                 </section>

                 </div>
        </div>
    )
}