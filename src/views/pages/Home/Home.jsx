
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




  const [searchQuery, setSearchQuery] = useState('')

  const [currentPage, setCurrentPage] = useState(1)

  const {categories, sort} = useSelector(store => store.filter)



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
      <PizzaList className="row row-cols-md-2 row-cols-llg-3 row-cols-xxl-4 gx-5 content__items" />
      <Paginator className={classes.paginator} setPage={setCurrentPage}/>
    </>
  );
}
