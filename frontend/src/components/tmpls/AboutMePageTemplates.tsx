import AboutMePageLeft from "../organisms/AboutMePageLeft";
import AboutMePageRight from "../organisms/AboutMePageRight";


const AboutMePageDesktopTemplate = ()=>{
    return (
        <div className="about-me-page-desktop-template-div-wrapper">
            <AboutMePageLeft />
            <AboutMePageRight />
        </div>
    );
}

const AboutMePageMobileTemplate = ()=>{
    return (
        <></>
    );
}


export {AboutMePageDesktopTemplate, AboutMePageMobileTemplate}