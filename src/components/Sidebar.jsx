import style from "../../public/assets/styles/SideBar.module.css"
import AccordionItem from "./AcordionItem";
import { useState } from "react";

export default function Sidebar() {
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

        // Desplaza la página hacia la sección correspondiente
        /*const sectionElement = document.getElementById(`section${id}`);
        if (sectionElement) {
            sectionElement.scrollIntoView();
        }*/

        console.log(id)
        console.log(sectionElement)
    };
 

    return(
        <div className={style.acc}>
            <ul className={style.externalUl} >
                <li id ={1} onClick={handleToggle}>Introduction</li>
            </ul>
            
            
                <ul className={style.externalUl}>
                    <li>Validation of Cuban data</li>
                </ul>

                <AccordionItem id={2} title="Image based models" expanded={expandedIds.includes(2)} onToggle={handleToggle}>
                    <AccordionItem id={3} title="Predicting Mechanical Ventilation ..." expanded={expandedIds.includes(3)} onToggle={handleToggle}>
                        <ul>
                           <li>Description</li>
                           <li>Results</li>
                        </ul>
                    </AccordionItem>
                    <AccordionItem id={4} title="Predicting Mortality Risk ..." expanded={expandedIds.includes(4)} onToggle={handleToggle}>
                        <ul>
                           <li>Description</li>
                           <li>Results</li>
                        </ul>
                    </AccordionItem>
                </AccordionItem>
            
            
            
            <AccordionItem id={5} title="Clinical data based models" expanded={expandedIds.includes(5)} onToggle={handleToggle}>
             <ul>
                <li>Cuban Clinical Data </li>
             </ul>
             <AccordionItem id={6} title="Early prediction of COVID-19..." expanded={expandedIds.includes(6)} onToggle={handleToggle}>
                        <ul>
                           <li>Description</li>
                           <li>Results</li>
                        </ul>
                </AccordionItem>
                <AccordionItem id={7} title="Machine Learning Techniques..." expanded={expandedIds.includes(7)} onToggle={handleToggle}>
                        <ul>
                           <li>Description</li>
                           <li>Results</li>
                        </ul>
                </AccordionItem>
            </AccordionItem>

            <ul className={style.externalUl}>
                <li>Conclutions</li>
            </ul>
            
        </div>
        

    )
}
