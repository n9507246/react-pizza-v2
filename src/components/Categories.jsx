import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Caregories({categoriesList,currentCategory, setCurrentCategory}){  
  
  return (
      <Swiper slidesPerView={'auto'} className="categories">
        <SwiperSlide 
          className={ currentCategory.id == null ? 'category active' : 'category '}
          onClick={ () => setCurrentCategory({id: null, name:'Все'}) }
          
        >
          Все
        </SwiperSlide>

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
