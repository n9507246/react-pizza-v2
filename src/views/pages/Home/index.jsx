
import Categories from '@components/Categories'
import Sort from '@components/Sort'
import PizzaList from'@components/PizzaList'
import NotFound from '@components/NotFound'
import Search from '@components/Search'
import Paginator from '@components/Paginator/Paginator';

import classes from './styles.module.scss'

import { useState, useEffect } from 'react'
import axios from 'axios'
import data from '@/data'


export default function () {


  const [dataPizzas, setDataPizzas] = useState([])
  const [isLoadDataPizzas, setIsLoadDataPizzas] = useState(false)
  const [errorLoadingPizzas, setErrorLoadingPizzas] = useState(null)

  const [searchQuery, setSearchQuery] = useState('')
  
  const [currentCategory, setCurrentCategory] = useState({id:null, name:"Все"})

  const SortByList = [ 
    {name:'самые популярные', sort:'raiting', direction: 'desc',  id: 0},
    {name:'дорогие', sort:'price', direction: 'desc' , id: 1},
    {name:'дешевые', sort:'price', direction: 'asc' , id: 2},
    {name:'по алфавиту', sort: 'title', direction: 'asc', id:3}   
  ]

  const [selectedSort, setSelectedSort] = useState(SortByList[0])

  useEffect(()=>{window.scrollTo(0,0)}, [])
  
  useEffect(()=>{
      
      setIsLoadDataPizzas(true)
      
      axios.get(`https://65cc38e9dd519126b83e219c.mockapi.io/api/v1/pizzas`,
        {
          params: {
            category: currentCategory.id,
            sortBy: selectedSort.sort,
            order: selectedSort.direction,
            search: searchQuery 
          }
        } 
      )
        .then(res =>  setDataPizzas(res.data) )
        .catch(e => {
          if(e.response.data === "Not found")
            setDataPizzas([])
        })
        .finally(() => setIsLoadDataPizzas(false) )
  
  }, [currentCategory, selectedSort, searchQuery])

  return (
   <>
      <div className={classes.content__top}>
        <div className={classes.content__top_mainParamsFilter}>
            <Sort 
              className={classes.sortSelector}
              sortByList={SortByList} 
              selectedSort={selectedSort} 
              setSelectedSort={setSelectedSort} 
            />
            <Search  
              className={classes.search} 
              value={setSearchQuery}
            />
        </div>
        <Categories  
            categoriesList={data.categories} 
            currentCategory={currentCategory} 
            setCurrentCategory={setCurrentCategory}/>
      </div>  
      <h2 className="content__title">Все пиццы</h2>
        {
          dataPizzas.length > 0 ? <PizzaList className="row row-cols-md-2 row-cols-llg-3 row-cols-xxl-4 gx-5 content__items" 
            data={dataPizzas} 
            loader={isLoadDataPizzas} 
            error={errorLoadingPizzas}
          />
          : <NotFound style={{minHeight: '70vh'}} message='По вашему запросу в текущий момент нет пицц'/>
        }
        <Paginator className={classes.paginator}/>
   </>
  );
}
