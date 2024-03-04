import {useEffect, useLayoutEffect, useRef } from 'react';
import NotFound from '@components/NotFound'
import PizzaBlock from './PizzaBlock';
import PizzaSkeleton from './PizzaBlock/PizzaSkeleton';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '@redux-slices/pizzaSlice';
import useCustomFilter from '../../hooks/useCustomFilter';

export default function PizzaList(props){

    const dataPizza = useSelector(store=>store.pizzas)
    const {categories, sort, search} = useSelector(store => store.filter)
    
    const dispatch = useDispatch()

    const filter = useCustomFilter()
    const {category} = filter.getAllParams()

    useEffect(()=>{
        dispatch(
            fetchPizzas({            
                category: category,
                sortBy: sort.currentVariant.sort,
                order: sort.currentVariant.direction,
                search: search.value,
                limit: dataPizza.queryLimit,
                page: dataPizza.page
            })
        )
    }, [category, sort, search, dataPizza.queryLimit, dataPizza.page ])


    const elementRef = useRef(null);
    useLayoutEffect(()=>{
        gsap.from(elementRef.current,{ duration: 0.1, y: 35 })
    }, [dataPizza.isLoading])
    

    if(dataPizza.error !== null ) 
        return <NotFound style={{minHeight: '70vh'}} message={dataPizza.error }/> 

    if(dataPizza.isLoading) 
        return <div {...props}> {new Array(8).fill(null).map((e, i) => <PizzaSkeleton key={i} className='col'/>) } </div>

    return( 
        <>
            <div  ref={elementRef}  {...props}>    
                {
                    dataPizza.list.map( pizzaData => <PizzaBlock className='col' data={pizzaData} key={pizzaData.id}/>)                        
                }  
            </div>

        </>
    )
}