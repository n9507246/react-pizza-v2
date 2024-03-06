import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function CartButtom(){
    const cart = useSelector(state => state.cart)

    return(
        <div className="cart__bottom">
            <div className="cart__bottom-details">
                <span className='cart__bottom-data-order'> Всего пицц: <b>{cart.valueItemsToCart} шт.</b> </span>
                <span className='cart__bottom-data-order'> Сумма заказа: <b>{cart.totalPice}  ₽</b> </span>
            </div>
            <div className="cart__bottom-buttons">
                <Link to='/' className="button button--outline button--add go-back-btn">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Вернуться назад</span>
                </Link>
                <Link to='/' className="button pay-btn">
                    <span>Оплатить сейчас</span>
                </Link>
            </div>
        </div>
    )
}