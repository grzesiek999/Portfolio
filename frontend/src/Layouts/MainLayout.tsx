import { Outlet } from "react-router-dom";
import { useMedia } from 'use-media';
import { MainLayoutMenuDesktop, MainLayoutMenuMobile } from "../components/organisms/MainLayoutMenu";




const MainLayout = () => {
    const isDesktop = useMedia({ minWidth: 1170 });

    return (
        <>
            {isDesktop?<MainLayoutMenuDesktop />:<MainLayoutMenuMobile/>}
            <Outlet />
        </>
    );
}


export default MainLayout