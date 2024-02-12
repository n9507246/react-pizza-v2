import { useState } from "react"
import CustomSelect from "./UI/CustomSelect"
import React, { useRef } from 'react';
import HoldButton from 'react-hold-button';  

export default function Caregories({categoriesList}){  
  
  const [currentCategory, setCurrentCategory] = useState(categoriesList[0])
  const scrollRef = useRef(null);

  return (
    <>
 
      <div className="categories" ref={scrollRef} >  
        <CustomSelect
          listOfVariants={categoriesList} 
          currentVariant={currentCategory}
          setVariant={setCurrentCategory}
        />
      </div>

    </>
  )
}
