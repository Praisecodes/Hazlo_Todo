import Logo from "../../assets/hazlo-logo.svg"
import {FaHome, FaChartBar, FaArchive, FaTrash, FaStar, FaCheckCircle} from "react-icons/fa"

function SideNav(){
    return (
        <>
        <div className="sideNav">
            <div className="logoSection">
                <img src={Logo} alt="" />
                <h2>Hazlo Todo</h2>
            </div> <br /><br />
            <div className="sections selected">
                <p>
                    <i><FaHome /></i>
                    Dashboard
                </p>
            </div>
            <div className="sections">
                <p>
                    <i><FaChartBar /></i>
                    Activies
                </p>
            </div>
            <div className="sections">
                <p>
                    <i><FaArchive /></i>
                    Archives
                </p>
            </div>
            <div className="sections">
                <p>
                    <i><FaTrash /></i>
                    Trash Bin
                </p>
            </div>
            <div className="sections">
                <p>
                    <i><FaStar /></i>
                    Starred
                </p>
            </div>
            <div className="sections">
                <p>
                    <i><FaCheckCircle /></i>
                    Completed
                </p>
            </div>
        </div>
        </>
    )
}

export default SideNav