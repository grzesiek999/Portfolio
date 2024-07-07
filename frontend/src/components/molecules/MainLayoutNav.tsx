import { useNavigate } from "react-router-dom"
import { ROUTER_PATH } from "../../router/RouterPath"

 
 
 
const MainLayoutNavDesktop = () => {

    const navigate = useNavigate()

    return (
        <div className="main-layout-nav-div-wrapper">
            <ul>
                <li onClick={()=>{navigate(ROUTER_PATH.ABOUT_ME)}}>About Me</li>
                <li>Skills</li>
                <li>Portfolio</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}


export {MainLayoutNavDesktop}