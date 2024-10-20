

type AboutMeInformationDivProps = {
    imgSrc: string;
    imgAlt: string;
    text: string;
    className: string;
}

const AboutMeInformationDivDesktop =({imgSrc, imgAlt, text, className}: AboutMeInformationDivProps) => {

    return(
        <div className={className}>
            <img src={imgSrc} alt={imgAlt} />
            <p>{text}</p>
        </div>
    )
}


export {AboutMeInformationDivDesktop}