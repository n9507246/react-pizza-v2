import './scss/app.scss'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from'./components/PizzaBlock'

function App() {
  return (
   <>
    <div class="wrapper">
      <Header/>
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price='540'/>
            <PizzaBlock title="Четыре сезона" price='310'/>
            <PizzaBlock title="Сырная" price='450'/>
            <PizzaBlock title="Перепони" price='390'/>
            <PizzaBlock title="Чизбургер-пицца" price='740'/>
            {/* <PizzaBlock title="Мексиканская" price='540'/> */}

          </div>
        </div>
      </div>
    </div>
  
   </>
  );
}

export default App;
