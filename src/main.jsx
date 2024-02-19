import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/app.scss';
import { RouterProvider } from "react-router-dom"
import router from "@routes"

import { store } from '@store'
import { Provider } from 'react-redux'

import gsap from 'gsap';
gsap.config({ nullTargetWarn: false,})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
 );

