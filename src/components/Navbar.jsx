import Link from "next/link"
import style from "../../public/assets/styles/Navbar.module.css"


export default function Navbar(){
    return(
        <div className={style.bar}>
            <ul>
                <li>
                   <Link href = "/home">Home</Link> 
                </li>
                <li>
                   <Link href = "/about">About</Link> 
                </li>
                <li>
                    <Link href = "/team">Our team</Link>
                </li>
                <li>
                    <Link href = "/">Project</Link>
                </li>
            </ul>

        </div>
        
    )
}