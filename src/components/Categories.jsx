import MySelect from "./UI/MySelect"

export default function Caregories ({categoriesList}){  
  return (
    <div class="categories">
      <MySelect variants={categoriesList}/>
    </div>
  )
}
