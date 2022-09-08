import Logo from "../../assets/hazlo-logo.svg"
import {FaHome, FaChartBar, FaArchive, FaTrash, FaStar, FaCheckCircle, FaArrowsAltH} from "react-icons/fa"
import Dashboard from "./layouts/dashboard";
import Activities from "./layouts/activities";
import Archives from "./layouts/archives";
import TrashBin from "./layouts/trashbin";
import Starred from "./layouts/starred";
import Completed from "./layouts/completed";

function SideNav(){

    const mainContainer_content = document.querySelector('.mainContainer_content');

    const SwitchUp = (events, section, ...args) =>{
        events.target.classList.add("selected")
        args.forEach((arg)=>{
            document.querySelector(`.${arg}`).classList.remove("selected")
        })

        switch(section){
            case "dashboard":
                mainContainer_content.append(<Dashboard />)
                break;
            case "activity":
                mainContainer_content.innerHTML = <Activities />
                break;
            case "archive":
                mainContainer_content.innerHTML = <Archives />
                break;
            case "trash":
                mainContainer_content.innerHTML = <TrashBin />
                break;
            case "starred":
                mainContainer_content.innerHTML = <Starred />
                break;
            case "complete":
                mainContainer_content.innerHTML = <Completed />
                break;
        }
    }
    
    return (
        <>
        <div className="sideNav">
            <div className="logoSection">
                <img src={Logo} alt="" />
                <h2>Hazlo Todo</h2>
            </div> <br /><br />
            <p className="sections dashOption selected" onClick={(e)=>{SwitchUp(e, "dashboard", "activityOption", "archiveOption", "trashOption", "starOption", "completeOption")}}>
                <i><FaHome/></i>
                Dashboard
            </p>
            <p className="sections activityOption" onClick={(e)=>{SwitchUp(e, "activity", "dashOption", "archiveOption", "trashOption", "starOption", "completeOption")}}>
                <i><FaChartBar/></i>
                Activities
            </p>
            <p className="sections archiveOption" onClick={(e)=>{SwitchUp(e, "archive", "dashOption", "activityOption", "trashOption", "starOption", "completeOption")}}>
                <i><FaArchive/></i>
                Archives
            </p>
            <p className="sections trashOption" onClick={(e)=>{SwitchUp(e, "trash", "dashOption", "archiveOption", "activityOption", "starOption", "completeOption")}}>
                <i><FaTrash /></i>
                Trash Bin
            </p>
            <p className="sections starOption" onClick={(e)=>{SwitchUp(e, "starred", "dashOption", "archiveOption", "trashOption", "activityOption", "completeOption")}}>
                <i><FaStar /></i>
                Starred
            </p>
            <p className="sections completeOption" onClick={(e)=>{SwitchUp(e, "complete", "dashOption", "archiveOption", "trashOption", "starOption", "activityOption")}}>
                <i><FaCheckCircle/></i>
                Completed
            </p>
        </div>
        </>
    )
}

export default SideNav