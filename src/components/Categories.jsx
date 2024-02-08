import { useState } from "react"
import MySelect from "./UI/MySelect"

export default function Caregories ({categoriesList}){  
  return (
    <div class="categories">
      <MySelect variants={categoriesList}/>
    </div>
  )
}



// function Category({name, isActive, selectCategory}){
//   return( 
//       <li 
//         onClick={()=>{selectCategory(name)}} 
//         className={isActive === true ? 'active' : ''}
//       >
//         {name}
//       </li>
//     )
// }

// export default function Caregories({categoriesList}) {
  
//   const [selectCategory, setSelectCategory] = useState(categoriesList[0].name)
  
//   return(
//       <div class="categories">
//         <ul>
//           {
//             categoriesList.map(
//                 (dataCategory) => 
//                   <Category 
//                     name={dataCategory.name}
//                     isActive={selectCategory === dataCategory.name }
//                     selectCategory={setSelectCategory}
//                     key={dataCategory.id}
//                   />  
//             )
//           } 
//         </ul>
//       </div>
//   )
// }