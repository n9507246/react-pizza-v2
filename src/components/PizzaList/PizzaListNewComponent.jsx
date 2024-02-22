import {useEffect, useLayoutEffect, useRef } from 'react';
import NotFound from '@components/NotFound'
import PizzaBlock from './PizzaBlock';
import PizzaSkeleton from './PizzaBlock/PizzaSkeleton';
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from '@redux-slices/pizzaSlice';

export default function PizzaList(props){

    const dataPizza = useSelector(store=>store.pizzas)
    const {categories, sort} = useSelector(store => store.filter)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(
            fetchPizzas({            
                category: categories.current.id,
                sortBy: sort.currentVariant.sort,
                order: sort.currentVariant.direction,
                //search: searchQuery,
                limit: 8,
                page: 1
            })
        )
    }, [categories, sort])


    const elementRef = useRef(null);
    useLayoutEffect(()=>{
        gsap.from(elementRef.current,{ duration: 0.1, y: 35 })
    }, [dataPizza.isLoading])
    

    if(dataPizza.error !== null ) 
        return <NotFound style={{minHeight: '70vh'}} message={props.error.message}/> 

    if(dataPizza.isLoading) 
        return <div {...props}> {new Array(8).fill(null).map((e, i) => <PizzaSkeleton key={i} className='col'/>) } </div>

    return( 
        <div  ref={elementRef}  {...props}>    
            {
                dataPizza.list.map( pizzaData => <PizzaBlock className='col' data={pizzaData} key={pizzaData.id}/>)                        
            }  
        </div>
    )
}