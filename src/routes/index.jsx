import { createBrowserRouter} from "react-router-dom"

import DefaultLayout from "@views/layouts/DefaultLayout"
import Home from "@pages/Home"
import NotFound from '@pages/NotFound'
import Cart from "@pages/Cart"

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