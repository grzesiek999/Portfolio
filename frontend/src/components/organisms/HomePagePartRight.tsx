import { HomePagePartRightSocialsDesktop } from "../molecules/HomePgaePartRightSocials";
import { HomePagePartRightSpansDesktop } from "../molecules/HomePgaePartRightSpans";



const HomePagePartRightDesktop = () => {
    return (
        <div className="home-page-part-right-desktop-div-wrapper">
            <HomePagePartRightSpansDesktop />
            <HomePagePartRightSocialsDesktop />
        </div>
    );
}

export {HomePagePartRightDesktop}