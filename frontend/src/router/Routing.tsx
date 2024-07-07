import { type ReactElement } from 'react';
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import { ROUTER_PATH } from './RouterPath';
import AboutMePage from '../pages/AboutMePage';
import HomePage from '../pages/HomePage';


const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route path={ROUTER_PATH.HOME} element={<HomePage />}/>
            <Route path={ROUTER_PATH.ABOUT_ME} element={<AboutMePage />}/>
        </Route>
    )
);


export default function Router(): ReactElement {
    return <RouterProvider router={ROUTER} />;
}