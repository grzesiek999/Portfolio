import { SkillsBox } from "../molecules/SkillsBox";



const SkillsPageTemplateDesktop = () =>{
    return (
        <div className="skills-page-template-desktop-div-wrapper">
            <SkillsBox imgSrcArray={['/public/icons/python.png', '/public/icons/django.png', '/public/icons/sql-server.png', '/public/icons/postgre.png']} className="backend-technology-box-div-wrapper"/>

            <SkillsBox imgSrcArray={['/public/icons/react.png', '/public/icons/js.png', '/public/icons/typescript.png', '/public/icons/html.png', '/public/icons/css-3.png', '/public/icons/sass.png']} className="backend-technology-box-div-wrapper"/>
            
            <SkillsBox imgSrcArray={['/public/icons/linux.png', '/public/icons/docker.png', '/public/icons/c-.png', '/public/icons/git.png', '/public/icons/photoshop.png', '/public/icons/figma.png']} className="backend-technology-box-div-wrapper"/>
        </div>
    );
}

const SkillsPageTemplateMobile = () =>{
    return (
        <>
        </>
    );
}

export {SkillsPageTemplateDesktop, SkillsPageTemplateMobile}