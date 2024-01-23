"use client"

import Image from "next/image"
import style from "../../../public/assets/styles/Experiments.module.css"
import { FaLink } from "react-icons/fa6";
import { useState, useEffect } from "react"
import DataModels from "../DataModels";
import Sidebar from "../Sidebar";


export default function ImageModels() {

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
     }, []) 


    return(
        isClient && <div className={style.cont}>
            <Sidebar/>
            <div className={style.content}>
                <div className={style.principal}>
                    <div className={style.introduction} id = "section1">
                        <div className={style.header}>
                            <h1> Brief introduction</h1>
                            <div>Due to the characteristics of our data, characterized by the non-existence of combined databases of image data with clinical data, based on the study of the state of the art, it was decided to implement 4 models as a baseline: Two models based on images and two based on clinical data.</div>
                        </div>

                    </div>
               
                    <div className={style.header}>
                        <h1> Image based models</h1>
                    </div>
                    <div className={style.initialP}>
                        <p>In our study, we decided to implement four methods as baselines. Two of these methods were based on image analysis, while another method was based on the combination of chest X-ray (CXR) image classification, radiomic features, and an additional method focused solely on CXR image classification. Additionally, we developed two methods based on clinical data classification, specifically adapting them to the characteristics of our own clinical data. These strategies allowed us to evaluate different approaches in predicting the outcomes of COVID-19 patients in Cuba.</p>
                    </div>

                    <div className={style.name} id = "section2">
                    <h1>Predicting Mechanical Ventilation Requirement and Mortality in COVID-19 using Radiomics and Deep Learning on Chest Radiographs: A Multi-Institutional Study</h1>
                    <span><a href="https://doi.org/10.3390/diagnostics11101812"><FaLink className={style.icon}/></a></span>
                    </div>

                    <div className={style.modelImage}>
                       <div className={style.imageBx}>
                        <Image src = "/assets/images/Picture2.jpg" layout="fill"
                            alt="Description">    
                        </Image>
                       </div>

                        <div className={style.text}>
                            <ul>
                                <li>
                                Predicting mechanical ventilation requirement and mortality using computational modeling of chest radiographs (CXRs) for coronavirus disease 2019 (COVID-19) patients.
                                </li>
                                <li>
                                Retrospective study analyzed 530 CXRs from 515 COVID-19 patients treated at Stony Brook University Hospital and Newark Beth Israel Medical Center between March and August 2020. 
                                </li>
                                <li>
                                Linear discriminant analysis (LDA), quadratic discriminant analysis (QDA), and random forest (RF) machine learning classifiers to predict mechanical ventilation requirement and mortality were trained and evaluated using radiomic features extracted from patients’ CXRs. 
                                </li>
                                <li>
                                Deep learning (DL) approaches were also explored for the clinical outcome prediction task and a novel radiomic embedding framework was introduced. 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.res} id = "section3">
                        <h3>Results</h3>
                    </div>
                    <div className={style.result}>
                        <p>The implementation of the predictive model in the group of patients included in the study yielded satisfactory results, and even superior to those obtained in the original article.</p>
                        <div className={style.tableHeader}>
                            Ventilation
                        </div>

                        <table>
                            <tr>
                               <td>Scheme</td>
                               <td>Bae, J. et al. 2021(results on exp. Cohort) AUC </td>
                               <td>Implemented(results on our cohort) *AUC</td>
                            </tr>
                            <tr>
                                <td>images</td>
                                <td>0.75</td>
                                <td>0.82</td>
                             </tr>
                             <tr>
                                <td>features</td>
                                <td>0.78</td>
                                <td>0.88 </td>
                             </tr>
                             <tr>
                                <td>features+images</td>
                                <td>0.77</td>
                                <td>0.90 </td>
                             </tr>
                        </table>

                        <div className={style.tableHeader}>
                            Mortality risk
                        </div>

                        <table>
                            <tr>
                               <td>Scheme</td>
                               <td>Bae, J. et al. 2021(results on exp. Cohort) AUC </td>
                               <td>Implemented(results on our cohort) *AUC</td>
                            </tr>
                            <tr>
                                <td>images</td>
                                <td>0.75</td>
                                <td>0.89</td>
                             </tr>
                             <tr>
                                <td>features</td>
                                <td>0.78</td>
                                <td>0.89</td>
                             </tr>
                             <tr>
                                <td>features+images</td>
                                <td>0.74</td>
                                <td>0.92</td>
                             </tr>
                        </table>
                    </div>
                    <div className={style.experiment2} id = "section4">
                        <div className={style.name}>
                            <h1>Predicting Mortality Risk of Covid-19 Patients Using Chest X-Rays </h1>
                            <span><a href=""><FaLink className={style.icon}/></a></span>
                        </div>
                        <div className={style.modelImage}>
                            {/*<div className={style.imageBx}>
                             <Image src = "/assets/images/Picture2.jpg" layout="fill"
                                 alt="Description">    
                             </Image>
                            </div>*/}

                             <div className={style.text}>
                                 <ul>
                                     <li>
                                         Model to determine the mortality of an infected patient on arrival to the health facilities to determine whether or not it is necessary to admit them to intensive care. 
                                     </li>
                                     <li>
                                         A CNN model based on the ResNet-18 architecture was trained on chest X-rays of COVID-19 patients achieving a training accuracy of 99.6 percent while the validation accuracy achieved 86.7% along with high sensitivity. 
                                     </li>
                                 </ul>
                            </div>
                    </div>
                    
                    <div className={style.result} id = "section5">
                        <div className={style.res}>
                            <h3>Results</h3>
                        </div>
                        <p>The implementation of the predictive model in the group of patients included in the study yielded satisfactory results, and even superior to those obtained in the original article.</p>
                        <div className={style.tableHeader}>
                            Validation results
                        </div>

                        <table>
                            <tr>
                               <td> Measure</td>
                               <td> Olowolayemo, A. et al. 2023(results on SBU dataset) </td>
                               <td> Implemented(resultsonourcohort) *</td>
                            </tr>
                            <tr>
                                <td>Accuracy</td>
                                <td> 0.860</td>
                                <td> 0.851</td>
                             </tr>
                             <tr>
                                <td>AUC</td>
                                <td>0.928</td>
                                <td>0.892 </td>
                             </tr>
                        </table>

                    </div>

                </div>
                </div>
                <div className={style.principal}>
                    <DataModels/>

                </div>
            </div>

        </div> 

    )       
}       