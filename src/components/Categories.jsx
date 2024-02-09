import { useState } from "react"
import CustomSelect from "./UI/CustomSelect"

export default function Caregories({categoriesList}){  
  
  const [currentCategory, setCurrentCategory] = useState(categoriesList[0])
  
  return (
    <div class="categories">
      <CustomSelect 
        listOfVariants={categoriesList} 
        currentVariant={currentCategory}
        setVariant={setCurrentCategory}
      />
    </div>
  )
}
