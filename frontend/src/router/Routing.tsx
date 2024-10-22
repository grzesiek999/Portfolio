import { type ReactElement } from 'react';
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import { ROUTER_PATH } from './RouterPath';
import AboutMePage from '../pages/AboutMePage';
import HomePage from '../pages/HomePage';
import EducationPage from '../pages/EducationPage';
import ContactPage from '../pages/ContactPage';
import SkillsPage from '../pages/SkillsPage';


const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
            <Route path={ROUTER_PATH.HOME} element={<HomePage />}/>
            <Route path={ROUTER_PATH.ABOUT_ME} element={<AboutMePage />}/>
            <Route path={ROUTER_PATH.SKILLS} element={<SkillsPage />}/>
            <Route path={ROUTER_PATH.EDUCATION} element={<EducationPage />} />
            <Route path={ROUTER_PATH.CONTACT} element={<ContactPage />} />
        </Route>
    )
);


export default function Router(): ReactElement {
    return <RouterProvider router={ROUTER} />;
}