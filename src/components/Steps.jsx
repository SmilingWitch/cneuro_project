import style from  "../../public/assets/styles/Steps.module.css"
import StepsCard from "./StepCard"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Steps(){

    useEffect(() => {
        AOS.init({
          duration:1500
      });
      }, []);


    return(
        <div className={style.cont}>
            <div className={style.header}>
                <h2> Major research & development stages </h2>
                
                <div className={style.stepsGrid}>
                <StepsCard number = {1}  
                            content = "To lay the foundations for all later development; to detail conceptual, architectural & data infrastructures that will allow actual development of the relevant components to begin accord-ing to specifications." 
                            header = "Foundational research & development"/>
                <StepsCard number = {2}  
                            content = "To develop tools & provisions in a local environment for transparent & immediate human interaction; to create machine learning algorithms for supporting prognosis & diagnoses." 
                            header = "Robust Diagnosis & Predictive Models"/>
                <StepsCard number = {3}  
                            content = "The overall goal is the integration & functional testing of the integrated platform" 
                            header = "Integration within the NHS multiplatform application"/>
                </div>
            </div>
            

        </div>
    )
}