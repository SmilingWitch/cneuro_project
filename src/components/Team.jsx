"use client"

import style from "../../public/assets/styles/Team.module.css"
import AccordionItem from "./AcordionItem"
import {useState} from "react"


export default function Team(){

    const items = [
        { id: 'section1', title: 'Sección 1', content: 'Contenido de la sección 1' },
        { id: 'section2', title: 'Sección 2', content: 'Contenido de la sección 2' },
        { id: 'section3', title: 'Sección 3', content: 'Contenido de la sección 3' },
       ];

       const [expandedItems, setExpandedItems] = useState({});

 const handleToggle = (id) => {
  setExpandedItems(prevState => ({
    ...prevState,
    [id]: !prevState[id],
  }));
 };



    return(
        <div className={style.cont}>
                <div className={style.header}>
                    <h1>Meet our team!</h1>
                    <h3>Our team is made up of interdisciplinary experts, each with a variety of skills and 
                        with a variety of skills and knowledge that allow us to approach any challenge from multiple 
                        approach any challenge from multiple angles</h3>
                </div>
                <div className={style.acordeonBx}>
                   <div className={style.acordeon}>
                    {items.map(item => (
                    <AccordionItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      content={item.content}
                      expanded={expandedItems[item.id] || false}
                      onToggle={handleToggle}
                    />
                    ))}
                    </div>

                </div>
        </div>
    )
}
