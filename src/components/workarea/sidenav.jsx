import Logo from "../../assets/hazlo-logo.svg"
import {FaHome, FaChartBar, FaArchive, FaTrash, FaStar, FaCheckCircle, FaArrowsAltH} from "react-icons/fa"

function SideNav(){

    const SwitchUp = (events, ...args) =>{
        events.target.classList.add("selected")
        args.forEach((arg)=>{
            document.querySelector(`.${arg}`).classList.remove("selected")
        })
    }
    
    return (
        <>
        <div className="sideNav">
            <div className="logoSection">
                <img src={Logo} alt="" />
                <h2>Hazlo Todo</h2>
            </div> <br /><br />
            <p className="sections dashOption selected" onClick={(e)=>{SwitchUp(e, "activityOption", "archiveOption", "trashOption", "starOption", "completeOption")}}>
                <i><FaHome/></i>
                Dashboard
            </p>
            <p className="sections activityOption" onClick={(e)=>{SwitchUp(e, "dashOption", "archiveOption", "trashOption", "starOption", "completeOption")}}>
                <i><FaChartBar/></i>
                Activities
            </p>
            <p className="sections archiveOption" onClick={(e)=>{SwitchUp(e, "dashOption", "activityOption", "trashOption", "starOption", "completeOption")}}>
                <i><FaArchive/></i>
                Archives
            </p>
            <p className="sections trashOption" onClick={(e)=>{SwitchUp(e, "dashOption", "archiveOption", "activityOption", "starOption", "completeOption")}}>
                <i><FaTrash /></i>
                Trash Bin
            </p>
            <p className="sections starOption" onClick={(e)=>{SwitchUp(e, "dashOption", "archiveOption", "trashOption", "activityOption", "completeOption")}}>
                <i><FaStar /></i>
                Starred
            </p>
            <p className="sections completeOption" onClick={(e)=>{SwitchUp(e, "dashOption", "archiveOption", "trashOption", "starOption", "activityOption")}}>
                <i><FaCheckCircle/></i>
                Completed
            </p>
        </div>
        </>
    )
}

export default SideNav