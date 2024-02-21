import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../redux/slices/filterSlice";


export default function Caregories(){  

  let categories = useSelector(store => store.filter.categories )
  const discpatch = useDispatch()
  
  return (
      <Swiper slidesPerView={'auto'} className="categories">
        <SwiperSlide 
          className={ categories.current.id == null ? 'category active' : 'category '}
          onClick={ () => discpatch(changeCategory({id: null, name:'Все'})) }
        >
          Все
        </SwiperSlide>

        {
          categories.list.map( category => 
            <SwiperSlide 
              className={ categories.current.id == category.id ? 'category active' : 'category '}
              onClick={ () => discpatch(changeCategory(category)) }
              key={category.id}
            >
              {category.name}
            </SwiperSlide>
          )
       
        }
      </Swiper>
  )
}
