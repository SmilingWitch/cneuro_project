
import style from "../../public/assets/styles/StepCard.module.css"
import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

    useEffect(() => {
        AOS.init({
          duration:1500
      });


  }, []);

    return(
        <div className={`${style.cont} container`} ref={containerRef} data-aos="fade-down-right" >
            <div class={`${style.circle} circle`} ref={circleRef}></div>
            <div className={style.bx}>
                <div className={style.number}>
                    0{number}
                </div>
                <div className={style.header} data-aos="fade-up">
                    {header}
                </div>
                <div className={style.content} data-aos="fade-up">
                    {content}
                </div>

            </div>
            

        </div>
        
        )
}