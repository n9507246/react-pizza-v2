import Header from '@components/Header'
import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import Preloader from '@components/Preloader/Preloader';

export default function (){
    return (

            <div className="wrapper container">
      
                <Suspense fallback={<Preloader/>}>
                    <Header/>
                    <div >    
                        <Outlet />
                    </div>
                </Suspense>
            </div>

    )
}