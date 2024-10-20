import { AboutMeInformationDivDesktop } from "../molecules/AboutMeInfomationDiv";

const AboutMePageRightDesktop = () => {
    return (
        <div className="about-me-part-right-div-wrapper">
            <AboutMeInformationDivDesktop imgSrc="/public/icons/work.png" imgAlt="work icon error" text="I work in transport-spedition-logistic industry like international forwarder on daily basic from four years but that's not job in which I see myself in long future." className="work-informations-div-wrapper" />
            <AboutMeInformationDivDesktop imgSrc="/public/icons/car-engine.png" imgAlt="sport bike icon error" text="In my heart was passion to automotive since forever, I love motorcycles and sport cars. When I have a little free time, I like tinker in garage with my vehicles." className="automotive-information-div-wrapper" />
            <AboutMeInformationDivDesktop imgSrc="/public/icons/bicep.png" imgAlt="gym icon error" text="Sometimes I also like to go to the gym or go for a walk." className="gym-information-div-wrapper" />
        </div>
    );
}

export {AboutMePageRightDesktop}