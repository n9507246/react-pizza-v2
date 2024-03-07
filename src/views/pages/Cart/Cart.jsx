import { useEffect } from "react"
import { useSelector } from "react-redux"

import CartTitle from "./CartTitle"
import CartItem from "./CartItem"
import CartButtom from "./CartButtom"

import NotFound from "@components/NotFound"
import CartEmpty from "./CartEmpty"



export default function Cart(){

    const cartList = useSelector(state => state.cart.listItems)
    useEffect(()=>{window.scrollTo(0,0)}, [])
    
    return(
        

        <div className="cart_content">
            <div className="cart" >
                <CartTitle/>
                {
                    cartList.length > 0  ?  
                    <div className="content__items ">
                        { cartList.map((item, index) => <CartItem item={item} key={index}/>) }
                    </div>
                    : <CartEmpty/>
                }
                <CartButtom/>
            </div>
        </div>
    )
}