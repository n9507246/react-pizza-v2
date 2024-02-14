import { createBrowserRouter} from "react-router-dom"

import DefaultLayout from "@views/layouts/DefaultLayout"
import StartPage from "@views/pages/StartPage"

export default createBrowserRouter([
    {
        element: <DefaultLayout/>,
        children:[
            {
                path: '/',
                element: <StartPage to='/dashboard'/>
            },
        ]
            
    }     
])