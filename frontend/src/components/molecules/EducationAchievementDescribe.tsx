

type EducationAchievementDescribeDesktopProps = {
    educationPleace: string;
    educationPleaceName: string;
    imgSrc: string;
    imgAlt: string
    href: string;
}

const EducationAchievementDescribeDesktop = ({educationPleaceName, educationPleace, imgSrc, imgAlt, href}: EducationAchievementDescribeDesktopProps) =>{
    return(
        <div className="education-achievement-describe-desktop-div-wrapper">
            <div className="education-achievement-pleace-div-wrapper">
                <span>{educationPleaceName}</span>
                <span>{educationPleace}</span>
            </div>
            <div className="achievement-image-div"><a href={href} target="_blank" download><img src={imgSrc} alt={imgAlt} className="achievement-image"/></a></div>
        </div>
    );
}

export {EducationAchievementDescribeDesktop}