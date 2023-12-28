"use client"

import style from "../../public/assets/styles/Team.module.css"
import AccordionItem from "./AcordionItem"
import {useState, useEffect} from "react"
import TeamCard from "./TeamCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParticipantesCard from "./ParticipantesCrad";


export default function Team(){

    const items = [
        {name : "Prof. Nikolaos Deligiannis (VUB-ETRO)" , institution: "Flemish institution", role : "Promoter" },
        { name: "Dr. Abel Díaz Berenguer (VUB-ETRO)", institution: "Flemish institution", role: "Co-promoter" },
        { name: "Prof. Sabine Allard (UZ Brussel)", institution: "Flemish institution", role: "Co-promoter" },
        { name: "Dr. Evelio Gonzalez Dalmau (CNEURO)", institution: "Partner institution", role: "Associated promoter" },
        { name: "Dr. Pedro Pablo Gonzalez (SCI)", institution: "Partner institution", role: "Associated co-promoter" }
       ];


       const participantes = [
        {
          name: "Evelio Gonzalez-Dalmau",
          level: "Ph.D.",
          occupation: "Physicist, Head of the MRI and Optogenetics Department at the Brain Mapping Division, CNEURO"
        },
        {
          name: "Pedro Pablo Gonzalez-Rojas",
          level: "Physician specializing in radiology",
          occupation: "President of the Cuban Imaging Society, works at Hospital 'Hermanos Amejeiras'"
        },
        {
          name: "Eduardo Garea-Llano",
          level: "Ph.D. in Technical Sciences",
          occupation: "Head of the Artificial Intelligence research group at the Neuroinformatics Department, CNEURO"
        },
        {
          name: "Ileana Morales Suárez",
          level: "Physician",
          occupation: "Director of Science and Innovation and Technology at the Ministry of Public Health of Cuba (MINSAP)"
        },
        {
          name: "Amaylid Arteaga Garcia",
          level: "Physician",
          occupation: "Director of CENCEC at MINSAP"
        },
        {
          name: "Taimy Amador-Nuñez",
          level: "Physician specializing in radiology",
          occupation: "MRI and Optogenetics Department, Brain Mapping Division, CNEURO"
        },
        {
          name: "Elizabeth Fernández Tamayo",
          level: "Physician specializing in radiology",
          occupation: "Radiology department of Hospital 'Clinico de 10 de Octubre'"
        },
        {
          name: "Yenisleidy Miranda Lorenzo",
          level: "Physician specializing in radiology",
          occupation: "Radiology department of Hospital 'Instituto Pedro Koury'"
        },
        {
          name: "Lina Martínez Ramírez",
          level: "Physician specializing in radiology",
          occupation: "Radiology department of Hospital 'Clínico de 10 de Octubre'"
        },
        {
          name: "Aylin Granados Rodríguez",
          level: "Physician specializing in radiology",
          occupation: "Radiology department of Hospital 'Salvador Allende'"
        },
        {
          name: "Ernesto Santiesteban-Torres",
          level: "Graduate of Biomedical Engineering, Master of Science student",
          occupation: "Specializes in medical image processing and machine learning"
        },
        {
          name: "Melissa Valera Aguilera",
          level: "Biomedical Engineering student",
          occupation: "Polytechnic University of Havana, CNEURO intern"
        },
        {
          name: "Joel Romero Aguiar",
          level: "Biomedical Engineering student",
          occupation: "Polytechnic University of Havana, CNEURO intern"
        },
        {
          name: "Ingrid Morejon García",
          level: "Bachelor of Science in Computer Science",
          occupation: "Software Developer at the Cuban Neurosciences Center"
        },
        {
          name: "Klaudia García Liashenko",
          level: "Bachelor of Science in Computer Science",
          occupation: "Software Developer at the Cuban Neurosciences Center"
        }
      ]

       const [expandedItems, setExpandedItems] = useState({});

    const handleToggle = (id) => {
      setExpandedItems(prevState => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    };

       useEffect(() => {
        AOS.init({
          duration:1500
      });


      }, []);



    return(
        <div className={style.cont}>
                <div className={style.header}>
                  <div className={style.imagesBx}>
                    <div className={style.img1} data-aos="fade-right">
                     <img src="/assets/images/robotichand.png" alt="" />
                    </div>
                    <div className={style.img2} data-aos="fade-left">
                      <img src="/assets/images/humanhand.png" alt="" />
                    </div>
                  </div>
                    <h1 data-aos="fade-down-left">Meet our team!</h1>
                    <h3 data-aos="fade-down-left">Our team is made up of interdisciplinary experts, each with a variety of skills and 
                        with a variety of skills and knowledge that allow us to approach any challenge from multiple 
                        approach any challenge from multiple angles</h3>
                </div>

                <div className={style.acordeonBx}>
                  <div className={style.promotores}>
                    <h2>Flemish project team (promoters, team members)</h2>
                  </div>
                   <div className={style.Bx}>
                    {items.map(item => (
                    <TeamCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      institution={item.institution}
                      rol={item.role}
                      /*onToggle={handleToggle}*/
                    />
                    ))}
                    </div>
                </div>

                <div className={style.participantes}>
                  {/*<div className={style.background}>
                    <img src="/assets/images/3d-render-network-communications-background-with-plexus-design.jpg" alt="" />
                    </div>*/}
                  <div className={style.partnersHeader}>
                    <h2>Partner team (promoters, team members)</h2>
                  </div>
                  <div className={style.Bx_parterns}>
                    {participantes.map(item => (
                    <ParticipantesCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      level={item.level}
                      occupation={item.occupation}
                      /*onToggle={handleToggle}*/
                    />
                    ))}
                    </div>


                </div>
        </div>
    )
}
