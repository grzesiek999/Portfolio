import { type ReactElement } from 'react';
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';


const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
        
        </Route>
    )
);


export default function Router(): ReactElement {
    return <RouterProvider router={ROUTER} />;
}