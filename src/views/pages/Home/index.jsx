import Categories from '@components/Categories'
import Sort from '@components/Sort'
import PizzaList from'@components/PizzaList'

import axios from 'axios'
import { useState, useEffect } from 'react'

import data from '@/data'
import Search from '@components/Search'

import classes from './styles.module.scss'

export default function () {


  const [dataPizzas, setDataPizzas] = useState([])
  const [isLoadDataPizzas, setIsLoadDataPizzas] = useState(false)
  const [errorLoadingPizzas, setErrorLoadingPizzas] = useState(null)


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
        {params: {
          category: currentCategory.id,
          sortBy: selectedSort.sort,
          order: selectedSort.direction,
        }} 
      )
        .then(res =>  setDataPizzas(res.data) )
        .catch(e => setErrorLoadingPizzas (e.message))
        .finally(() => setIsLoadDataPizzas(false) )
  
  }, [currentCategory, selectedSort])

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
            {/* <div> */}
            <Search  className={classes.search}/>
            {/* </div>   */}
        </div>
        <Categories  
            categoriesList={data.categories} 
            currentCategory={currentCategory} 
            setCurrentCategory={setCurrentCategory}/>
      </div>  
      <h2 className="content__title">Все пиццы</h2>
        <PizzaList className="row row-cols-md-2 row-cols-llg-3 row-cols-xxl-4 gx-5 content__items" 
            data={dataPizzas} 
            loader={isLoadDataPizzas} 
            error={errorLoadingPizzas}
        />
   </>
  );
}
