import style from "../../public/assets/styles/AcordionItem.module.css"
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";


export default function AccordionItem({ id, title, content, expanded, onToggle }) {
    return (
     <div className={style.cont}>
       <div onClick={() => onToggle(id)} className={style.title}>
         {title}
         <span>{expanded ? <MdOutlineKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</span>
       </div>
       <div className={expanded ? `${style.content}` : `${style.invisible}`} >{content}</div>
     </div>
    );
   }
