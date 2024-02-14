import axios from 'axios'
import { useState } from 'react'
import useOnMounted from '@hooks/useOnMounted'
import PizzaBlock from'@components/PizzaBlock'
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="134" cy="136" r="125" />
      <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
      <rect x="0" y="326" rx="10" ry="10" width="280" height="88" />
      <rect x="0" y="436" rx="10" ry="10" width="95" height="30" />
      <rect x="125" y="427" rx="24" ry="24" width="152" height="45" />
    </ContentLoader>
);

export default function Component(props){
    const [dataPizzas, setDataPizzas] = useState([])
    const [isLoadDataPizzas, setIsLoadDataPizzas] = useState(true)
    const [errorLoadingPizzas, setErrorLoadingPizzas] = useState(null)
    
    
    useOnMounted(() =>  {
        axios.get('https://65cc38e9dd519126b83e219c.mockapi.io/api/v1/pizzas')
            .then(res => {res.data && setDataPizzas(res.data)})
            .catch(e => setErrorLoadingPizzas(e.message))
            .finally(() =>  setIsLoadDataPizzas(false))
    })

    if(errorLoadingPizzas !== null ) 
        return <h3 style={{color:'red'}}>{errorLoadingPizzas} </h3> 

    return( 
        <div {...props}>            
            {
                
                isLoadDataPizzas 
                    ? <>{new Array(8).fill(null).map(e => <Skeleton className='col'/>)}</> 
                    : dataPizzas.map( pizzaData => <PizzaBlock className='col' data={pizzaData} key={pizzaData.id}/> )
                                    
            }  
        </div>
    )
}