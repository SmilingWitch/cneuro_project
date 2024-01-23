"use client"
import style from "../../public/assets/styles/Experiments.module.css"
import { FaLink } from "react-icons/fa6";
import Image from "next/image"
import AccordionItem from "./AcordionItem";
import { useState } from "react";

export default function DataModels(){

    const [expandedIds, setExpandedIds] = useState([]);

    const handleToggle = (id) => {
        setExpandedIds(prevIds => {
            if (prevIds.includes(id)) {
                // Si el elemento ya está abierto, lo cerramos
                return prevIds.filter(i => i !== id);
            } else {
                // Si el elemento está cerrado, lo abrimos
                return [...prevIds, id];
            }
        });
    };


    return(
        <div className={style.dataModel}>
            
            <div className={style.header} id = "section6">
                <h1>Clinical data based models</h1>
            </div>
            <div className={style.name}>
                <h2>Cuban Clinical Data prepared to be used in the implementation of prognosis model</h2>
            </div>
            <div className={style.initialP}>
                Cuban clinical data has been prepared for use in the implementation of a prognosis model. The clinical data of 643 patients who died in intensive care services contain symptoms, comorbidities, and a natural language description of the patient&aposs evolution until death. Out of these, 380 have an autopsy description. The total number of patients with data is 1633. Additionally, there are clinical data available for 990 patients who were admitted with a positive PCR or antigen test for COVID-19 and had a satisfactory evolution, being discharged alive. These data include symptoms and comorbidities.
            </div>
            
            <div className={style.data}>
            <AccordionItem id={1} title="Data" expanded={expandedIds.includes(1)} onToggle={handleToggle}>
             <ul>
                <li>Age</li>  
                <li>Sex</li>
                <li>Asymptomatic</li>
             </ul>
            </AccordionItem>
            <AccordionItem id={2} title="Symptoms" expanded={expandedIds.includes(2)} onToggle={handleToggle}>
             <ul>
                <li> Bronchopneumonia</li>
                <li> Polypnea</li>
                <li>Cough</li>
                <li>Fever</li>
                <li>Expectoration and/or secretion</li>
                <li>Diarrhea</li>
                <li>General weakness or malaise</li>
                <li>Loss of appetite, taste and smell</li>
                <li> Headache </li>
                <li> Muscle, joint and/or bone pain.</li>
             </ul>
            </AccordionItem>
            <AccordionItem id={3} title="Comorbidities" expanded={expandedIds.includes(3)} onToggle={handleToggle}>
                <ul>
                    <li> Mellitus diabetes</li>
                    <li> Chronic kidney disease or failure</li>
                    <li> HTA</li>
                    <li>Ischemic heart disease.</li>
                    <li> Chronic obstructive pulmonary disease.</li>
                    <li>Acute myocardial infarction</li>
                    <li>Cancer</li>
                    <li>Neurodegenerative disease (AD, Parkingson&aposs, other dementias)</li>
                    <li>Alcoholism</li>
                    <li>Anemia</li>
                    <li>Asthma</li>
                    <li>Tuberculosis</li>
                    <li> Stroke</li>
                    <li>Smoker or ex-smoker</li>
                    <li>Liver cirrhosis or hepatic steanosis</li>
                    <li>Psychiatric illness</li>
                    <li>Epilepsy</li>
                    <li>Morbid obesity</li>
                    <li>Hypothyroidism or hyperthyroidism</li>
                    <li>Gout disease</li>
                    <li>Bedridden or prostrate patient</li>
                    <li>Prostatic hyperplasia</li>
                    <li> Gastritis, ulcer, distal hernia</li>
                    <li>Rheumatoid or gouty arthritis</li>
                    <li>Glaucoma, blindness, weak vision</li>
                    <li>Amputee patient</li>
                </ul>
            </AccordionItem>
            </div>
            <div className={style.name} id = "section7">
            <h1>Predicting Mechanical Ventilation Requirement and Mortality in COVID-19 using Radiomics and Deep Learning on Chest Radiographs: A Multi-Institutional Study</h1>
            <span><a href=""><FaLink className={style.icon}/></a></span>
            </div>
            <div className={style.modelImage}>
               <div className={style.imageBx}>
                <Image src = "/assets/images/Picture3.jpg" layout="fill"
                    alt="Description">    
                </Image>
               </div>
                
                <div className={style.text}>
                    <ul>
                        <li>
                        Prediction model for hospitalization in ICU of COVID-19 patients using ANN.
                        </li>
                        <li>
                        25 laboratory parameters of 248 consecutive adult patients with COVID-19 were evaluated for database creation.
                        </li>
                        <li>
                        They developed a new alpha index to evaluate the association of each parameter with the outcome. 
                        </li>
                        <li>
                        The first five laboratory indices ranked by importance were neutrophil-to-lymphocyte ratio, lactate dehydrogenase, fibrinogen, albumin, and D-dimers.
                        </li>
                        <li>
                        The best ANN based on these indices achieved an accuracy of 95.97%, a precision of 90.63%, and a sensitivity of 93.55%. and F1 score 92.06%
                        </li>
                    </ul>
                </div>
            </div>

            <div className={style.adapt} id = "section8">
                <div className={style.res}>
                    <h3>Adapting the Asteris et al (2023) model to our clinical data</h3>
                </div>

                <div className={style.header}>
                The Asteris et al (2023) model has been adapted to incorporate their clinical data. The data scoring process involves assigning scores based on the importance of each factor in the patient&aposs ICU admission decision or mortality risk evaluation. The scores are encoded as follows:
                </div>
                
                <div className={style.accordeonBx}>
                <AccordionItem id={4} title="Symptoms" expanded={expandedIds.includes(4)} onToggle={handleToggle}>
                    <ul>
                        <li><span>Age greater than or equal to 60 years:</span>  100 (yes), 0 (no)</li>
                        <li><span>Asymptomatic:</span>  0-100</li>
                        <li><span>Bronchopneumonia:</span>  100 (yes), 0 (no)</li>
                        <li><span>Polypnea:</span>  10 (yes), 0 (no)</li>
                        <li><span>Cough:</span>  10 (yes), 0 (no)</li>
                        <li><span>Fever:</span>  10 (yes), 0 (no)</li>
                        <li><span>Expectoration and/or secretion:</span>  10 (yes), 0 (no)</li>
                        <li><span>Diarrhea:</span>  10 (yes), 0 (no)</li>
                        <li><span>General weakness or malaise:</span>  10 (yes), 0 (no)</li>
                        <li><span>Loss of appetite, taste, and smell:</span>  10 (yes), 0 (no)</li>
                        <li><span>Headache:</span>  10 (yes), 0 (no)</li>
                        <li><span>Muscle, joint, and/or bone pain:</span>  10 (yes), 0 (no)</li>
                    </ul>
                </AccordionItem> 
                </div>
            
                <div className={style.header}>
                    The SysScore represents the total sum of the scores of all symptoms, ranging from 0 to 190.
                </div>
                <div className={style.accordeonBx}>
                    <AccordionItem id={5} title="Comorbidities" expanded={expandedIds.includes(5)} onToggle={handleToggle}>
                        <ul>
                            <li><span>Diabetes mellitus:</span>  50 (yes), 0 (no)</li>
                            <li><span>Chronic kidney disease or failure:</span>  60 (yes), 0 (no)</li>
                            <li><span>Hypertension:</span>  20 (yes), 0 (no)</li>
                            <li><span>Ischemic heart disease:</span>  50 (yes), 0 (no)</li>
                            <li><span>Chronic obstructive pulmonary disease:</span>  50 (yes), 0 (no)</li>
                            <li><span>Acute myocardial infarction:</span>  50 (yes), 0 (no)</li>
                            <li><span>Cancer:</span>  60 (yes), 0 (no)</li>
                            <li><span>Neurodegenerative disease (AD, Parkinson&aposs, other dementias):</span>  50 (yes), 0 (no)</li>
                            <li><span>Alcoholism:</span>  50 (yes), 0 (no)</li>
                            <li><span>Anemia:</span>  50 (yes), 0 (no)</li>
                            <li><span>Asthma:</span>  50 (yes), 0 (no)</li>
                            <li><span>Tuberculosis:</span>  70 (yes), 0 (no)</li>
                            <li><span>Stroke:</span>  50 (yes), 0 (no)</li>
                            <li><span>Smoker or ex-smoker:</span>  20 (yes), 0 (no)</li>
                            <li><span>Liver cirrhosis or hepatic steatosis:</span>  50 (yes), 0 (no)</li>
                            <li><span>Psychiatric illness:</span>  50 (yes), 0 (no)</li>
                            <li><span>Epilepsy:</span>  50 (yes), 0 (no)</li>
                            <li><span>Morbid obesity:</span>  50 (yes), 0 (no)</li>
                            <li><span>Hypothyroidism or hyperthyroidism:</span>  50 (yes), 0 (no)</li>
                            <li><span>Gout disease: </span> 20 (yes), 0 (no)</li>
                            <li><span>Bedridden or prostrate patient:</span>  70 (yes), 0 (no)</li>
                            <li><span>Prostatic hyperplasia:</span>  20 (yes), 0 (no)</li>
                            <li><span>Gastritis, ulcer, distal hernia:</span>  20 (yes), 0 (no)</li>
                            <li><span>Rheumatoid or gouty arthritis:</span>  20 (yes), 0 (no)</li>
                            <li><span>Glaucoma, blindness, weak vision:</span>  20 (yes), 0 (no)</li>
                            <li><span>Amputee patient:</span>  20 (yes), 0 (no)</li>
                        </ul>
                    </AccordionItem>

                </div>
            </div>
            <div className={style.resumen}>
                The ComScore represents the total sum of the scores of all comorbidities, ranging from <span>0 to 1120</span> . In total, there are <span>5 scores</span> used for evaluation: Age, Asymptomatic, SysScore, ComScore, and FScore. The model was trained on <span>1425 samples</span> and tested on <span>202 samples</span> , with a training <span>epoch of 200</span> . The optimizer used was <span>Adam</span>, and the loss function employed was <span>binary crossentropy</span>. 
            </div>


            <div>

            <div className={style.name} id = "section10">
            <h1>Machine Learning Techniques for Prognosis Estimation and Knowledge Discovery From Lab Te. Olivatost Results With Application to the COVID-19 Emergency. </h1>
            <span><a href=""><FaLink className={style.icon}/></a></span>
            </div>
            <div className={style.modelImage}>
               {/*<div className={style.imageBx}>
                <Image src = "/assets/images/Picture3.jpg" layout="fill"
                    alt="Description">    
                </Image>*/}
                 <div className={style.text}>
                    <ul>
                        <li>
                        Predicting the outcome (alive or deceased) of a patient at different times of her/his hospitalisation minimising false negatives (wrong survival predictions). 
                        </li>
                        <li>
                        The methodology builds different optimised ML models to select those that perform the best to recognise, at different times of hospitalisation, patients who will have an unfavourable prognosis (decease). 
                        </li>
                        <li>
                        These models exploit a new algorithm, that identifies an uncertainty threshold to rule out uncertain predictions with the purpose of making a ML model both more performing and more reliable.
                        </li>
                        <li>
                        Propose a general method for automatically extracting multi-variable prognostic rules from the available data.

                        </li>
                        <li>
                        Such rules can provide possible new useful knowledge on the considered disease, they can be used effectively to explain the predictions made by the ML models.
                        </li>
                    </ul>
                </div>
               </div>
                
               
            </div>
            <div className={style.adapt} id = "section11">
                <div className={style.res}>
                    <h3>Adapting the Gerevini et al (2023) model to our clinical data</h3>
                </div>

                <div className={style.header}>
                    {/*The Gerevini et al (2023) model has been adapted to incorporate their clinical data. The data scoring process involves assigning scores based on the importance of each factor in the patient&aposs ICU admission decision or mortality risk evaluation. The scores are encoded as follows:*/}
                    When adapting the Gerevini et al. (2023) model to our clinical data, the following basic features were considered for the datasets:
                </div>
                
            </div>
            <div className={style.prov}>
                <div>
                The classifiers used for evaluation were as follows:
                </div>
                <AccordionItem id={10} title="Features" expanded={expandedIds.includes(10)} onToggle={handleToggle}>
                    <ul>
                        <li>The age and sex of the patients</li>
                        <li>The values and dates of throat swab exams for COVID-19.</li>
                        <li>The values and dates of several common lab tests, such as PCR, LDH, Ferritin, Troponin-T, White Blood Cells, D-Dimer, Lymphocytes, or Neutrophils.</li>
                        <li>The final prognosis of hospitalization at the end of the stay, which is the classification value for the application (either in-hospital death, released survivor, or transferred to another hospital or rehabilitation center).</li>
                    </ul>
                </AccordionItem>
                <div>The basic features considered by us for the datasets are:</div> 
                    <AccordionItem id={11} title="Features" expanded={expandedIds.includes(11)} onToggle={handleToggle}>
                        <ul>
                            <li>The age and sex of the patients</li>
                            <li>The values of exams for COVID-19.</li>
                            <li>The values of symptoms and comorbidities on the first day of hospitalization.</li>
                            <li>The final prognosis of hospitalization at the end of the stay, which is the classification value for the application (either in-hospital death or released survivor).</li>
                        </ul>
                    </AccordionItem>
                <div className={style.evaluation}>
                    <div>
                        The evaluation of the model was based on five scores: Age, Asymptomatic, SysScore, ComScore, and FScore. These scores were used to assess the performance of different classifiers on the dataset. The training set consisted of 1425 samples, while the test set had 202 samples.
                        The classifiers used for evaluation were as follows:
                    </div>

                    <ul>
                        <li>RF: RandomForestClassifier with 100 estimators and balanced class weights.</li>
                        <li>EXT: ExtraTreesClassifier with 100 estimators, a random state of 0, and balanced class weights.</li>
                        <li>XGB: GradientBoostingClassifier with 100 estimators, a learning rate of 1.0, a max depth of 1, and a random state of 0.</li>
                        <li>LGB: LGBMClassifier with a learning rate of 1.0, a max depth of -1, and a random state of 0.</li>
                    </ul>
                </div>
                
            </div>
                <div className={style.res} id = "section12">
                    <h3>Results</h3>
                </div>
                <div className={style.text1}>
                These classifiers were applied to the dataset to assess their performance and determine their effectiveness in predicting the desired outcomes.
                </div>
                <div className={style.data}>
                <div className={style.resultData}>
                        <AccordionItem id={6} title="Accuracy" expanded={expandedIds.includes(6)} onToggle={handleToggle}>
                        <table>
                        <tr>
                           <td>Iteration</td>
                           <td>RF</td>
                           <td>EXT</td>
                           <td>XGB</td>
                           <td>LGB</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>0.875</td>
                            <td>0.858</td>
                            <td>0.866</td>
                            <td>0.860</td>
                         </tr>
                         <tr>
                            <td>2</td>
                            <td>0.838</td>
                            <td>0.86</td>
                            <td>0.875</td>
                            <td>0.877</td>
                         </tr>
                         <tr>
                            <td>3</td>
                            <td>0.864</td>
                            <td>0.844</td>
                            <td>0.86</td>
                            <td>0.852</td>
                         </tr>
                         <tr>
                            <td>4</td>
                            <td>0.852</td>
                            <td>0.838</td>
                            <td>0.879</td>
                            <td>0.893</td>
                         </tr>
                         <tr>
                            <td>5</td>
                            <td>0.86</td>
                            <td>0.864</td>
                            <td>0.868</td>
                            <td>0.854</td>
                         </tr>
                         <tr>
                            <td>6</td>
                            <td>0.873</td>
                            <td>0.862</td>
                            <td>0.868</td>
                            <td>0.872</td>
                         </tr>
                         <tr>
                            <td>Mean</td>
                            <td>0.860</td>
                            <td>0.854</td>
                            <td>0.869</td>
                            <td>0.868</td>
                         </tr>
                        </table>
                        </AccordionItem> 
                        <AccordionItem id={7} title="Precision" expanded={expandedIds.includes(7)} onToggle={handleToggle}>
                        <table>
                        <tr>
                           <td>Iteration</td>
                           <td>RF</td>
                           <td>EXT</td>
                           <td>XGB</td>
                           <td>LGB</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>0.868</td>
                            <td>0.845</td>
                            <td>0.865</td>
                            <td>0.903</td>
                         </tr>
                         <tr>
                            <td>2</td>
                            <td>0.828</td>
                            <td>0.923</td>
                            <td>0.905</td>
                            <td>0.929</td>
                         </tr>
                         <tr>
                            <td>3</td>
                            <td>0.837</td>
                            <td>0.836</td>
                            <td>0.905</td>
                            <td>0.878</td>
                         </tr>
                         <tr>
                            <td>4</td>
                            <td>0.812</td>
                            <td>0.847</td>
                            <td>0.904</td>
                            <td>0.911</td>
                         </tr>
                         <tr>
                            <td>5</td>
                            <td>0.859</td>
                            <td>0.866</td>
                            <td>0.882</td>
                            <td>0.929</td>
                         </tr>
                         <tr>
                            <td>6</td>
                            <td>0.866</td>
                            <td>0.853</td>
                            <td>0.905</td>
                            <td>0.910</td>
                         </tr>
                         <tr>
                            <td>Mean</td>
                            <td>0.845</td>
                            <td>0.862</td>
                            <td>0.894</td>
                            <td>0.910</td>
                         </tr>
                    </table>
                        </AccordionItem> 
                        <AccordionItem id={8} title="F1" expanded={expandedIds.includes(8)} onToggle={handleToggle}>
                        <table>
                        <tr>
                           <td>Iteration</td>
                           <td>RF</td>
                           <td>EXT</td>
                           <td>XGB</td>
                           <td>LGB</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>0.82</td>
                            <td>0.8217</td>
                            <td>0.805</td>
                            <td>0.814</td>
                         </tr>
                         <tr>
                            <td>2</td>
                            <td>0.779</td>
                            <td>0.8</td>
                            <td>0.824</td>
                            <td>0.828</td>
                         </tr>
                         <tr>
                            <td>3</td>
                            <td>0.829</td>
                            <td>0.777</td>
                            <td>0.818</td>
                            <td>0.801</td>
                         </tr>
                         <tr>
                            <td>4</td>
                            <td>0.812</td>
                            <td>0.784</td>
                            <td>0.836</td>
                            <td>0.855</td>
                         </tr>
                         <tr>
                            <td>5</td>
                            <td>0.798</td>
                            <td>0.797</td>
                            <td>0.808</td>
                            <td>0.788</td>
                         </tr>
                         <tr>
                            <td>6</td>
                            <td>0.822</td>
                            <td>0.824</td>
                            <td>0.818</td>
                            <td>0.830</td>
                         </tr>
                         <tr>
                            <td>Mean</td>
                            <td>0.810</td>
                            <td>0.801</td>
                            <td>0.818</td>
                            <td>0.819</td>
                         </tr>
                        </table>
                        </AccordionItem> 
                        <AccordionItem id={9} title="F2" expanded={expandedIds.includes(9)} onToggle={handleToggle}>
                        <table>
                        <tr>
                           <td>Iteration</td>
                           <td>RF</td>
                           <td>EXT</td>
                           <td>XGB</td>
                           <td>LGB</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>0.759</td>
                            <td>0.779</td>
                            <td>0.775</td>
                            <td>0.779</td>
                         </tr>
                         <tr>
                            <td>2</td>
                            <td>0.757</td>
                            <td>0.802</td>
                            <td>0.077</td>
                            <td>0.792</td>
                         </tr>
                         <tr>
                            <td>3</td>
                            <td>0.813</td>
                            <td>0.804</td>
                            <td>0.812</td>
                            <td>0.816</td>
                         </tr>
                         <tr>
                            <td>4</td>
                            <td>0.772</td>
                            <td>0.77</td>
                            <td>0.759</td>
                            <td>0.767</td>
                         </tr>
                         <tr>
                            <td>5</td>
                            <td>0.8</td>
                            <td>0.731</td>
                            <td>0.749</td>
                            <td>0.795</td>
                         </tr>
                         <tr>
                            <td>6</td>
                            <td>0.778</td>
                            <td>0.758</td>
                            <td>0.8</td>
                            <td>0.806</td>
                         </tr>
                         <tr>
                            <td>Mean</td>
                            <td>0.78</td>
                            <td>0.774</td>
                            <td>0.778</td>
                            <td>0.793</td>
                         </tr>
                        </table>
                        </AccordionItem> 
                </div>

                </div>
                <div className={style.header} id = "section1">
                    <h1>Conclusions</h1>
                    <div>Due to the absence of combined image and clinical data databases, we implemented four baseline models: two based on images and two based on clinical data. The performance of these models closely matched that of the methods analyzed. For the clinical data implementation, we curated and coded our databases to utilize demographic data, symptoms, comorbidities, and scoring systems. During our tenure at VUB, we aim to develop a model that optimally utilizes both image and clinical data. This proposed model will have two entry branches: one processing CXR images for RALE classification, including extraction and coding of radiomic features, and another branch processing clinical data. Both branches will generate feature vectors, which will be used to classify the data type and select the trained model for prognosis.</div>
                </div>
                

            </div>
    
       
    )
}