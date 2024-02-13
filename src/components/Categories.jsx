import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Caregories({categoriesList}){  
  
  const [currentCategory, setCurrentCategory] = useState(categoriesList[0])

  return (
      <Swiper slidesPerView={'auto'} spaceBetween={15} className="categories">
        {
          categoriesList.map( category => 
            <SwiperSlide 
              className={ currentCategory.id == category.id ? 'category active' : 'category '}
              onClick={ () => setCurrentCategory(category) }
              key={category.id}
            >
              {category.name}
            </SwiperSlide>
          )
        }
      </Swiper>
  )
}
