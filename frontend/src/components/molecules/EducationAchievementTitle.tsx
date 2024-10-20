 
 

type EducationAchievementTitleDesktopTypes = {
    educationPleaceType: string;
    dateStart: string;
    dateEnd: string
}

const EducationAchievementTitleDesktop = ({educationPleaceType, dateStart, dateEnd}: EducationAchievementTitleDesktopTypes) => {
    return (
        <div className="education-achievement-title-desktop-div-wrapper">
            <span className="education-pleace-type-span">{educationPleaceType}</span>
            <span className="education-date-span">{dateStart}-{dateEnd}</span>
        </div>
    );
}

export {EducationAchievementTitleDesktop}