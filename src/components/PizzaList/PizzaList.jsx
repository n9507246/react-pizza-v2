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
    const dispatch = useDispatch()

    const filter = useCustomFilter()
    const {category, sortBy, order, search, page, limit} = filter.getAllParams()

    useEffect(()=>{
        dispatch(
            fetchPizzas({category, sortBy, order, search, page, limit})
        )
    }, [ category, sortBy, order, search, page, limit ])


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