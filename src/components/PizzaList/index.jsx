import {useLayoutEffect, useRef } from 'react';

export default function PizzaList(props){

    const elementRef = useRef(null);

    useLayoutEffect(()=>{
        gsap.from(elementRef.current,{ duration: 0.1, y: 35 })
    }, [props.loader])
    

    if(props.error !== null ) 
        return <NotFound style={{minHeight: '70vh'}} message={props.error.message}/> 

    if(props.loader) 
        return <div {...props}> {new Array(8).fill(null).map((e, i) => <Skeleton key={i} className='col'/>) } </div>

    return( 
        <div ref={elementRef} {...props}>            
            {
                props.data.map( pizzaData => <PizzaBlock className='col' data={pizzaData} key={pizzaData.id}/>)                        
            }  
        </div>
    )
}