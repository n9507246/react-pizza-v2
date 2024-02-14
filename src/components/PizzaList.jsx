import axios from 'axios'
import { useState } from 'react'
import useOnMounted from '../hooks/useOnMounted'
import PizzaBlock from'./PizzaBlock'

export default function Component(props){
    const [dataPizzas, setDataPizzas] = useState([])
    const [isLoadDataPizzas, setIsLoadDataPizzas] = useState(true)
    const [errorLoadingPizzas, setErrorLoadingPizzas] = useState(null)
    
    
    useOnMounted(() =>  {
        axios.get('https://65cc38e9dd519126b83e219c.mockapi.io/api/v1/pizzxxxxas')
            .then(res => {res && setDataPizzas(res)})
            .catch(e => setErrorLoadingPizzas(e.message))
            .finally(() =>  setIsLoadDataPizzas(false))
    })

    if(errorLoadingPizzas !== null ) return <h3 style={{color:'red'}}>{errorLoadingPizzas} </h3>

    return( 
        <div {...props}>            
            {
                
                isLoadDataPizzas ? <h1>Loadding...</h1> :
                dataPizzas.map( pizzaData => 
                    <PizzaBlock className='col' data={pizzaData} key={pizzaData.id}/>    
                )
                                    
            }  
        </div>
    )
}