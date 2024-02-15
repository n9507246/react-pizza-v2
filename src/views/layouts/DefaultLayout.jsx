import Header from '@components/Header'
import { Outlet } from "react-router-dom";

export default function (){
    return (
        <div className="wrapper container">
        <Header/>
            <div >
                <Outlet />
            </div>
        </div>
    )
}