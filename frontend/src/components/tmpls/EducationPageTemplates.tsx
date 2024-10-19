import { EducationAchievementFieldDesktop } from "../organisms/EducationAchievementField";


const EducationPageDesktopTemplate = () => {
    return (
        <div className="education-page-desktop-template-div-wrapper">
            <div className="education-page-part2-desktop-template-div-wrapper">
                <EducationAchievementFieldDesktop educationPleaceType="High School" educationPleace="Poland, Olkusz" educationPleaceName="I High School name's Kazimierz Wielki" dateStart="2015-09 " dateEnd=" 2018-04" imgSrc="../../public/image/lo.png" imgAlt="lo image error" href="https://lo1olkusz.eu/"/>
                <EducationAchievementFieldDesktop educationPleaceType="JavaScript Course" educationPleace="Poland, Nowy Sącz" educationPleaceName="Inventum Sp. z o. o." dateStart="2023-04 " dateEnd=" 2023-04" imgSrc="../../public/image/certificate.png" imgAlt="certificate image error" href="../../public/pdf/JavaScript-Course-Certyficate.pdf"/>
                <EducationAchievementFieldDesktop educationPleaceType="IT, Engineering Studies" educationPleace="Faculty of Computer Science and Telecommunications" educationPleaceName="Cracow University of Technology" dateStart="2020-10 " dateEnd=" 2024-06" imgSrc="../../public/image/pk.jpeg" imgAlt="pk image error" href="https://www.pk.edu.pl/index.php?lang=en"/>
                <EducationAchievementFieldDesktop educationPleaceType="IT, Master's Degree" educationPleace="Faculty of Computer Science and Telecommunications" educationPleaceName="Cracow University of Technology" dateStart="2024-10 " dateEnd=" until now" imgSrc="../../public/image/pk.jpeg" imgAlt="pk image error" href="https://www.pk.edu.pl/index.php?lang=en"/>
            </div>
            <div className="education-page-part1-desktop-template-div-wrapper"><img src="../../public/image/education-page-image.jpg" alt="education image error" className="education-page-image"/></div>
        </div>
    );
}

const EducationPageMobileTemplate = () => {
    return (
        <></>
    );
}

export {EducationPageDesktopTemplate, EducationPageMobileTemplate}