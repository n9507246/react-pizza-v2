import { createBrowserRouter} from "react-router-dom"

import DefaultLayout from "@views/layouts/DefaultLayout"
import Home from "@views/pages/Home"

export default createBrowserRouter([
    {
        element: <DefaultLayout/>,
        children:[
            {
                path: '/',
                element: <Home to='/dashboard'/>
            },
        ]
            
    }     
])