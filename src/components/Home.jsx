"use client"
import style from "../../public/assets/styles/Home.module.css"
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import Sections from "./Sections";
import Steps from "./Steps";

export default function Home(){

    const handleClick = () => {
        console.log("Scroll")
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };
  


    return( 
        <div className={style.cont} >

           <section className={style.header}  id="section1">
            <div className={style.bx}>
                <div className={style.contBx}>
                    <div className={style.logoBx}>
                        <img src="/assets/images/[removal.ai]_1d3a2e2a-967e-418a-9804-7c09c2e5bc75-cneuro.png" alt="" />
                        <img src="/assets/images/[removal.ai]_42c207b6-f328-4b6e-af84-d397a899a876-vlir.png" alt="" />
                    </div>
                    <h1>Toward Precision On Medicine for the Prediction of Treatment response to <span>Covid-19</span> in Cuba</h1>
                    <h3>Improve the quality of the Cuban health system and the well-being of the population!</h3>
                </div>
                
            </div>
            <div className={style.img}>
                <img src="/assets/images/abstract-black-futuristic-background.jpg" alt="" />
            </div>
            <div className={style.btn} onClick={handleClick}>
                 <IoIosArrowDown className={style.icon}   />
            </div>
                
           </section>

           <Sections/>
           
           <Steps/>

        </div>
    
    );
}