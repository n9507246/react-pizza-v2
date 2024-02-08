import './scss/app.scss'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from'./components/PizzaBlock'

import data from './data'

function App() {
  return (
   <>
    <div class="wrapper">
      <Header/>
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories categoriesList={data.categories}/>
            <Sort/>
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            {
              data.pizzas.map( pizzaData => 
                <PizzaBlock data={pizzaData} />    
              )
            }
            
          </div>
        </div>
      </div>
    </div>
  
   </>
  );
}

export default App;
