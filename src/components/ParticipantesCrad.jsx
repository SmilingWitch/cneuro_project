import style from "../../public/assets/styles/PartersCard.module.css"

export default function ParticipantesCard({name,level,occupation}){

    return(
        <div className={style.card}>
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