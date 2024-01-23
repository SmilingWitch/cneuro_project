import Link from "next/link"
import style from "../../public/assets/styles/Navbar.module.css"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function Navbar(){

    const pathname = usePathname()
    const router = useRouter();
    const [visible, setVisible] = useState(false)

    return(
        <div className={style.bar}>
            <ul>
                <li>
                   <Link href = "/home" className={`link ${pathname === "/home" ? `${style.active} `: ""}`}>Home</Link> 
                </li>
                {/*<li>
                   <Link href = "/about" className={`link ${pathname === "/about" ? `${style.active} `: ""}`}>About</Link> 
                </li>*/}
                <li>
                    <Link href = "/team" className={`link ${pathname === "/team" ? `${style.active} `: ""}`}>Our team</Link>
                </li>
                <li>
                    <Link href = "/imageModels" className={`link ${pathname === "/imageModels" ? `${style.active} `: ""}`}>Experiments</Link>
                </li>
            </ul>

        </div>
        
    )
}