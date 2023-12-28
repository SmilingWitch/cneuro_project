import style from "../../public/assets/styles/PartersCard.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function ParticipantesCard({name,level,occupation}){

    useEffect(() => {
        AOS.init({
          duration:1500
      });


      }, []);

    return(
        <div className={style.card} data-aos="fade-up">
            <div className={style.name}>
                {name}
            </div>
            <div className={style.level}>
                <span>Level: </span> {level}
            </div>
            <div className={style.occ}>
              <span> Occupation: </span>  {occupation}
            </div>

        </div>
    )
}