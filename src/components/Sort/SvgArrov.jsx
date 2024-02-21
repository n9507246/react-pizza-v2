import { useRef } from "react";
import { gsap } from 'gsap';

export default function SvgArrow({isOpen}){
    const svgArrow = useRef(null);

    const animationClose = { duration: 0.2, rotation: 0, transformOrigin: 'center', repeat: 0, ease: 'linear'}
    const animationOpen = { duration: 0.2, rotation: 90, transformOrigin: 'center', repeat: 0, ease: 'linear'}

    if(isOpen) gsap.to(svgArrow.current, animationOpen)
    else gsap.to(svgArrow.current, animationClose)
 
    return( 
        <svg ref={svgArrow} width="30" height="18"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
        </svg>
    )
}