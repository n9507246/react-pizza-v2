
import Categories from '@components/Categories'
import Sort from '@components/Sort'
import PizzaList from'@components/PizzaList'
import Search from '@components/Search'
import Paginator from '@components/Paginator/Paginator';

import classes from './styles.module.scss'

import { useState, useEffect } from 'react'
import axios from 'axios'

import { useSelector } from 'react-redux';

export default function Home() {


  const [dataPizzas, setDataPizzas] = useState([])
  const [isLoadDataPizzas, setIsLoadDataPizzas] = useState(false)
  const [errorLoadingPizzas, setErrorLoadingPizzas] = useState(null)

  const [searchQuery, setSearchQuery] = useState('')

  const [currentPage, setCurrentPage] = useState(1)

  const {categories, sort} = useSelector(store => store.filter)

  useEffect(()=>{
      window.scrollTo(0,0)
      setIsLoadDataPizzas(true)
      setErrorLoadingPizzas(null)
      
      axios.get(`https://65cc38e9dd519126b83e219c.mockapi.io/api/v1/pizzas`,
        {
          params: {
            category: categories.current.id,
            sortBy: sort.currentVariant.sort,
            order: sort.currentVariant.direction,
            search: searchQuery,
            limit: 8,
            page: currentPage
          }
        } 
      )
      .then(res =>  setDataPizzas(res.data) )
      .catch(e => {
        if(e.response.data === "Not found")
        setErrorLoadingPizzas({message:"По вашему запросу в текущий момент нет пицц"})
      })
      .finally(() => setIsLoadDataPizzas(false) )
  
  }, [ categories, sort, searchQuery, currentPage])

  return (
    <>
      <div className={classes.content__top}>
        <div className={classes.content__top_mainParamsFilter}>
            <Sort className={classes.sortSelector} />
            <Search  
              className={classes.search} 
              value={setSearchQuery}
            />
        </div>
        <Categories />
      </div>  
      <h2 className="content__title">Все пиццы</h2>
          <PizzaList className="row row-cols-md-2 row-cols-llg-3 row-cols-xxl-4 gx-5 content__items" 
            data={dataPizzas} 
            loader={isLoadDataPizzas ? 1 : 0 } 
            error={errorLoadingPizzas}
          />
        <Paginator className={classes.paginator} setPage={setCurrentPage}/>
        
    </>
  );
}
