import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from "react-redux";
import useCustomFilter from '@hooks/useCustomFilter';

import 'swiper/css';
import { useEffect } from 'react';


export default function Caregories(){  

  let categories = useSelector(store => store.filter.categories )
  
  const filter = useCustomFilter()
  const currentParamsFilter = filter.getAllParams()

  return (
      <Swiper slidesPerView={'auto'} className="categories">
        <SwiperSlide 
          className={ currentParamsFilter.category == null ? 'category active' : 'category '}
          onClick={ () => filter.delete({name:'category'}) }
        >
          Все
        </SwiperSlide>

        {
          categories.list.map( category => 
            <SwiperSlide 
              className={ currentParamsFilter.category == category.id ? 'category active' : 'category '}
              onClick={ () => filter.add({category: category.id }) }
              key={category.id}
            >
              {category.name}
            </SwiperSlide>
          )
       
        }
      </Swiper>
  )
}
