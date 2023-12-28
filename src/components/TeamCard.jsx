import style from "../../public/assets/styles/TeamCard.module.css"

export default function TeamCard({name, institution, rol}){

    return(
        <div className={style.card}>
            <div className={style.name}>
                {name}
            </div>
            <div className={style.inst}>
                {institution}
            </div>
            <div className={style.rol}>
                {rol}
            </div>

        </div>
    )
}