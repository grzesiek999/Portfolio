import { useState } from "react";
import { EducationAchievementDescribeDesktop } from "../molecules/EducationAchievementDescribe";
import { EducationAchievementTitleDesktop } from "../molecules/EducationAchievementTitle";


type EducationFieldDesktopTypes = {
    educationPleaceType: string;
    educationPleace: string;
    educationPleaceName: string;
    dateStart: string;
    dateEnd: string;
    imgSrc: string;
    imgAlt: string;
    href: string;
}

const EducationAchievementFieldDesktop = ({educationPleaceType, educationPleace, educationPleaceName, dateStart, dateEnd, imgSrc, imgAlt, href}: EducationFieldDesktopTypes) => {

    const [visibleDescribe, setVisibleDescribe] = useState<boolean>(false)

    return (
        <div className="education-achievement-field-desktop-div-wrapper" onClick={()=>{setVisibleDescribe(prevState => !prevState)}} style={{opacity: visibleDescribe ? 1 : 0.9, backgroundColor: visibleDescribe ? 'rgb(28, 29, 30)' : undefined, cursor: visibleDescribe ? 'default' : 'pointer'}} >
            <EducationAchievementTitleDesktop educationPleaceType={educationPleaceType} dateStart={dateStart} dateEnd={dateEnd} />
            {visibleDescribe ? <EducationAchievementDescribeDesktop educationPleace={educationPleace} educationPleaceName={educationPleaceName} imgSrc={imgSrc} imgAlt={imgAlt} href={href}/> : null }
        </div>
    );
}

export {EducationAchievementFieldDesktop}