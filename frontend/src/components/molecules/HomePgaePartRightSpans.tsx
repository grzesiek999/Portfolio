import { CvDownloadButton } from "../atoms/CvDownloadButton";

const HomePagePartRightSpansDesktop = () => {
    return (
        <div className="home-page-part-right-spans-desktop-div-wrapper">
            <span className="home-page-s1">Hi there,</span> 
            <span className="home-page-s2">I'm Grzesiek Pasich</span>
            <span className="home-page-s3">I'm into web develop</span>
            <CvDownloadButton />
        </div>
    );
}

export {HomePagePartRightSpansDesktop}