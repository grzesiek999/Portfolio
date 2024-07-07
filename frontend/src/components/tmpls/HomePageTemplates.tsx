import { HomePagePartLeftDesktop } from "../organisms/HomePagePartLeft";
import { HomePagePartRightDesktop } from "../organisms/HomePagePartRight";


const HomePageDesktopTemplate = ()=>{
    return (
        <div className="home-page-desktop-template-div-wrapper">
            <HomePagePartLeftDesktop />
            <HomePagePartRightDesktop />
        </div>
    );
}

const HomePageMobileTemplate = ()=>{
    return (
        <></>
    );
}


export {HomePageDesktopTemplate, HomePageMobileTemplate}