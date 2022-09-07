import Logo from "../../assets/hazlo-logo.svg"
import {FaHome, FaChartBar, FaArchive, FaTrash, FaStar, FaCheckCircle, FaArrowsAltH} from "react-icons/fa"

function SideNav(){

    const SwitchUp = (events, ele1, ele2, ele3, ele4) =>{
        events.target.classList.add("selected")
    }
    
    return (
        <>
        <div className="sideNav">
            <div className="logoSection">
                <img src={Logo} alt="" />
                <h2>Hazlo Todo</h2>
            </div> <br /><br />
            <p className="sections selected" onClick={SwitchUp}>
                <i><FaHome/></i>
                Dashboard
            </p>
            <p className="sections" onClick={SwitchUp}>
                <i><FaChartBar/></i>
                Activities
            </p>
            <p className="sections" onClick={SwitchUp}>
                <i><FaArchive/></i>
                Archives
            </p>
            <p className="sections">
                <i><FaTrash /></i>
                Trash Bin
            </p>
            <p className="sections">
                <i><FaStar /></i>
                Starred
            </p>
            <p className="sections">
                <i><FaCheckCircle/></i>
                Completed
            </p>
        </div>
        </>
    )
}

export default SideNav