
import style from "../../public/assets/styles/StepCard.module.css"
import { useRef, useEffect, useState } from 'react';

export default function StepsCard({number, header,content}){

    const containerRef = useRef();
  const circleRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const circle = circleRef.current;
    
    
/*--------------Para el circlulo--------------*/
    if (!container || !circle) {
      return;
    }

    const handleMouseMove = (e) => {
        let x = e.clientX - container.offsetLeft -/* circle.offsetWidth / 1*/ 180;
        let y = e.clientY - container.offsetTop - /*circle.offsetHeight / 1*/ 500 ;

        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
    };
}, []);


    return(
        <div className={`${style.cont} container`} ref={containerRef}  >
            <div class={`${style.circle} circle`} ref={circleRef}></div>
            <div className={style.bx}>
                <div className={style.number}>
                    0{number}
                </div>
                <div className={style.header}>
                    {header}
                </div>
                <div className={style.content}>
                    {content}
                </div>

            </div>
            

        </div>
        
        )
}