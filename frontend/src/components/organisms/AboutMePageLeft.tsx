import { AboutMeInformationDivDesktop } from "../molecules/AboutMeInfomationDiv"


const AboutMePageLeftDesktop = () => {
    return(
        <div className="about-me-part-left-div-wrapper">
            <AboutMeInformationDivDesktop imgSrc="/public/icons/hello.png" imgAlt="hi icon error" text="My name is Grzesiek Pasich, I live in small town Wolbrom which is located in south part of Poland next to Cracow." className="basic-informations-div-wrapper" />
            <AboutMeInformationDivDesktop imgSrc="/public/icons/study.png" imgAlt="study icon error" text="I'm interested in computer science and electronics that's why I decided go to studies in this way. I graduated engineering studies from computer science at the Cracow University of Technology and I'm continuate learning on second step studies with cybersecurity speciality. I would like to develop in IT industry because it make me fun and I feel that I make what I like." className="study-informations-div-wrapper" />
        </div>
    )
}

export {AboutMePageLeftDesktop}