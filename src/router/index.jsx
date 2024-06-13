import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
}from "react-router-dom";
import { List} from "../pages";
import App from"../App.jsx"
import React from 'react'

const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
            <Route index element={<List/>}/>
            </Route>
        )
    )
    return <RouterProvider router={router}/>
}

export default Index

