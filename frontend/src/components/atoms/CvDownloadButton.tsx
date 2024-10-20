import { Link } from "react-router-dom";


const CvDownloadButton = () => {
    return(
        <Link to="../../public/pdf/Grzegorz_Pasich.pdf" target="_blank" download><button type="button" className="download-cv-button" onClick={()=>{}}>Curriculum vitae<img src="../../public/icons/arrow-down.png" alt="arrow icon error" className="arrow-icon" /></button></Link>
    );
}


export {CvDownloadButton}

