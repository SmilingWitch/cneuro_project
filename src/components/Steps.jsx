import style from  "../../public/assets/styles/Steps.module.css"
import StepsCard from "./StepCard"

export default function Steps(){
    return(
        <div className={style.cont}>
            <div className={style.header}>
                <h2>The work plan for the COVID-19 PROMPT project involves three major research & development stages followed by an evaluation phase.</h2>
                
                <div className={style.stepsGrid}>
                <StepsCard number = {1}  
                            content = "To lay the foundations for all later development; to detail conceptual, architectural & data infrastructures that will allow actual development of the relevant components to begin accord-ing to specifications." 
                            header = "Foundational research & development"/>
                <StepsCard number = {2}  
                            content = "To develop tools & provisions in a local environment for transparent & immediate human interac-tion; to create machine learning algorithms for supporting prognosis & diagnoses." 
                            header = "Robust Diagnosis & Predictive Models"/>
                <StepsCard number = {3}  
                            content = "The overall goal is the integration & functional testing of the integrated platform" 
                            header = "Integration within the NHS multiplatform application"/>
                </div>
            </div>
            

        </div>
    )
}