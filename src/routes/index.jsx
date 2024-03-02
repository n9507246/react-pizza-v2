import { createBrowserRouter} from "react-router-dom"

// import DefaultLayout from "../views/layouts"
import { lazy } from "react"

const DefaultLayout = lazy(()=>import('@views/layouts/DefaultLayout'))
const Home = lazy(()=>import('@views/pages/Home'))
const NotFound = lazy(()=>import('@views/pages/NotFound'))
const Cart = lazy(()=>import('@views/pages/Cart'))



export default createBrowserRouter([
    
    {
        element: <DefaultLayout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ]
    },
    
    {

        element: <DefaultLayout/>,
        children:[
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
        
         
])