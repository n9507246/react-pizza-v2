import emptyCartImg from '@/assets/img/empty-cart.png'
import { Link } from 'react-router-dom'

export default function CartEmpty(){

    return(
        <div class="cart cart--empty" style={{marginTop:'100px'}}>
            <h2>Корзина пустая <icon>😕</icon></h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.<br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={emptyCartImg} alt="Empty cart" />
            <Link to="/home" class="button button--black">
                <span>Вернуться назад</span>
            </Link>
        </div>
        
    )
}