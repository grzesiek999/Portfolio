import { MainLayoutNavDesktop } from "../molecules/MainLayoutNav";
import { ROUTER_PATH } from "../../router/RouterPath";
import { useNavigate } from 'react-router-dom';





const MainLayoutMenuDesktop = () => {

    const navigate = useNavigate()

    return(
        <div className="main-layuot-menu-desktop-div-wrapper">
            <span className="menu-name-span" onClick={ ()=> {navigate(ROUTER_PATH.HOME)}}>Grzesiek</span>
            <MainLayoutNavDesktop />
        </div>
    );
}

const MainLayoutMenuMobile = () => {
    return(
        <>
        </>
    );
}


export {MainLayoutMenuDesktop, MainLayoutMenuMobile}