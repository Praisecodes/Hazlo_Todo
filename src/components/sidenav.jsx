import Logo from "../assets/hazlo-logo.svg"
import {FaHome, FaStar, FaChartBar, FaArchive, FaTrash, FaCheckCircle} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

export default function SideNav(props){
    let nav = useNavigate();
    return (
        <>
        <div className="sidenav">
            <div className="logoDiv">
                <img src={Logo} alt="" />
                <h1>Hazlo Todo</h1>
            </div>

            <Link to="/dashboard" className={(props.section == "dashboard") ? "sideOption selected" : "sideOption"}>
                <i><FaHome /></i>
                Dashboard
            </Link>

            <Link to="./" className={(props.section == "activities") ? "sideOption selected" : "sideOption"}>
                <i><FaChartBar /></i>
                Activities
            </Link>

            <Link to="./" className={(props.section == "archives") ? "sideOption selected" : "sideOption"}>
                <i><FaArchive /></i>
                Archives
            </Link>

            <Link to="./" className={(props.section == "trashBin") ? "sideOption selected" : "sideOption"}>
                <i><FaTrash /></i>
                Trash Bin
            </Link>

            <Link to="./" className={(props.section == "starred") ? "sideOption selected" : "sideOption"}>
                <i><FaStar /></i>
                Starred
            </Link>

            <Link to="/completed" className={(props.section == "completed") ? "sideOption selected" : "sideOption"}>
                <i><FaCheckCircle /></i>
                Completed
            </Link>
        </div>
        </>
    )
}