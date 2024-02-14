import { createBrowserRouter} from "react-router-dom"

import DefaultLayout from "@views/layouts/DefaultLayout"
import Home from "@pages/Home"
import NotFound from '@pages/NotFound'

export default createBrowserRouter([
    
    {
        element: <DefaultLayout/>,
        children:[
            {
                path: '/',
                element: <Home to='/dashboard'/>
            },
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