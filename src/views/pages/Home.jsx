import Categories from '@components/Categories'
import Sort from '@components/Sort'
import PizzaList from '@components/PizzaList'

import data from '@/data'


export default function () {
  return (
   <>
      <div className="content__top">
          <Categories  categoriesList={data.categories}/>
          <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <PizzaList className="row row-cols-md-2 row-cols-llg-3 row-cols-xxl-4 gx-5 content__items"/>

   </>
  );
}
