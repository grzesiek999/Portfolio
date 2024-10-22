 
 

type EducationAchievementTitleDesktopProps = {
    educationPleaceType: string;
    dateStart: string;
    dateEnd: string
}

const EducationAchievementTitleDesktop = ({educationPleaceType, dateStart, dateEnd}: EducationAchievementTitleDesktopProps) => {
    return (
        <div className="education-achievement-title-desktop-div-wrapper">
            <span className="education-pleace-type-span">{educationPleaceType}</span>
            <span className="education-date-span">{dateStart}-{dateEnd}</span>
        </div>
    );
}

export {EducationAchievementTitleDesktop}