import { SocialLinkIcon } from "../atoms/SocialLinkIcon";

const HomePagePartRightSocialsDesktop = () => {
    return (
        <div className="home-page-part-right-socials-desktop-div-wrapper">
            <SocialLinkIcon social_type='facebook' />
            <SocialLinkIcon social_type='instagram' />
            <SocialLinkIcon social_type='github' />
            <SocialLinkIcon social_type='linkedin' />
        </div>
    );
}

export {HomePagePartRightSocialsDesktop}