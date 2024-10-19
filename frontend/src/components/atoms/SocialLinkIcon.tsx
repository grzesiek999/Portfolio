import { useState } from "react";
import { Link } from "react-router-dom"


type SocialLinkIconProps = {
    social_type: string
}

const SocialLinkIcon = ({social_type}: SocialLinkIconProps) =>{

    const src =`../../public/icons/${social_type}.png`;
    const alt =`${social_type} icon error`
    const [linkArray, setLinkArray] = useState(['https://www.facebook.com/grzesiek.pasich1','https://www.instagram.com/grzegorz.pasich','https://github.com/grzesiek999','https://www.linkedin.com/in/grzegorz-pasich-26695527a/']);


    if (social_type === 'facebook'){
        return (
            <Link to={linkArray[0]} target="_blank">
                <img src={src} alt={alt} className="social-icon" />
            </Link>
        );
    } 
    else if (social_type === 'instagram') {
        return (
            <Link to={linkArray[1]} target="_blank">
                <img src={src} alt={alt} className="social-icon" />
            </Link>
        );
    } 
    else if (social_type === 'github') {
        return (
            <Link to={linkArray[2]} target="_blank">
                <img src={src} alt={alt} className="social-icon" />
            </Link>
        );
    } 
    else if (social_type === 'linkedin') {
        return (
            <Link to={linkArray[3]} target="_blank">
                <img src={src} alt={alt} className="social-icon" />
            </Link>
        );
    } else {return null;} 
}


export {SocialLinkIcon}