

type SkillsBoxProps = {
    imgSrcArray: string[];
    className: string;
}

const SkillsBox = ({imgSrcArray, className}: SkillsBoxProps) => {
    
    return (
        <div className={className}>
            <ul>
                {imgSrcArray.map((src, index)=>(
                    <li key={index}><img src={src} alt="skill icon error"/></li>
                ))}
            </ul>
        </div>
    );
}


export {SkillsBox}