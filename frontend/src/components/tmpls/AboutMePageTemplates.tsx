import { AboutMePageLeftDesktop } from "../organisms/AboutMePageLeft";
import { AboutMePageRightDesktop } from "../organisms/AboutMePageRight";


const AboutMePageDesktopTemplate = ()=>{
    return (
        <div className="about-me-page-desktop-template-div-wrapper">
            <AboutMePageLeftDesktop />
            <AboutMePageRightDesktop />
        </div>
    );
}

const AboutMePageMobileTemplate = ()=>{
    return (
        <></>
    );
}


export {AboutMePageDesktopTemplate, AboutMePageMobileTemplate}