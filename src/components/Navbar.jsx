import Link from "next/link"
import style from "../../public/assets/styles/Navbar.module.css"
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';

export default function Navbar(){

    const pathname = usePathname()
    const router = useRouter();


    return(
        <div className={style.bar}>
            <ul>
                <li>
                   <Link href = "/home" className={`link ${pathname === '/home' ? `${style.active} `: ''}`}>Home</Link> 
                </li>
                <li>
                   <Link href = "/about" className={`link ${pathname === '/about' ? `${style.active} `: ''}`}>About</Link> 
                </li>
                <li>
                    <Link href = "/team" className={`link ${pathname === '/team' ? `${style.active} `: ''}`}>Our team</Link>
                </li>
                <li>
                    <Link href = "/" className={`link ${pathname === '/' ? `${style.active} `: ''}`}>Project</Link>
                </li>
            </ul>

        </div>
        
    )
}