import CustomSelect from "@UI/CustomSelect"
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';

export default function SortOptions( {sortBy, selectedSort, setSort}){

    const elementRef = useRef(null);
    
    useEffect(() => {
      gsap.to(elementRef.current,{duration: 0.15, height:"200px", opacity:1, ease: 'linear'});
      
    }, []);
    

    
    return( 

        <div ref={elementRef} className="sort__popup" style={{height:'100px',opacity:'0'}}>
            <CustomSelect 
                listOfVariants={sortBy} 
                currentVariant={selectedSort}
                setVariant={setSort}
            />
        </div>
    )
}