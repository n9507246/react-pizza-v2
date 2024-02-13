import './scss/app.scss'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from'./components/PizzaBlock'

import data from './data'

function App() {

  return (
   <>
    <div className="wrapper container">

      <Header/>
      <div className="content">
          <div className="content__top">
            <Categories  categoriesList={data.categories}/>
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              data.pizzas.map( pizzaData => 
                <PizzaBlock data={pizzaData} key={pizzaData.id}/>    
              )
            }
            
          </div>
      </div>
    </div>
  
   </>
  );
}

export default App;
