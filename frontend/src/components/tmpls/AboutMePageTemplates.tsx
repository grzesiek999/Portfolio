import { AboutMePartLeftDesktop } from "../organisms/AboutMePartLeft";
import { AboutMePartRightDesktop } from "../organisms/AboutMePartRight";

const AboutMePageDesktopTemplate = ()=>{
    return (
        <div className="about-me-page-desktop-template-div-wrapper">
            <AboutMePartLeftDesktop />
            <AboutMePartRightDesktop />
        </div>
    );
}

const AboutMePageMobileTemplate = ()=>{
    return (
        <></>
    );
}


export {AboutMePageDesktopTemplate, AboutMePageMobileTemplate}