import { FaAngleDown, FaArrowRight, FaBell, FaHome, FaMoon, FaUser } from "react-icons/fa"
import { useState, useTransition } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/hazlo-logo.svg";

export default function Header(){
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [dropDown, setDropDown] = useState(false);
    const nav = useNavigate();
    function handleLogout(){
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        nav('/login');
    }
    return (
        <>
        <div className="header">
            <img src={Logo} alt="" />
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="search" placeholder="Enter Activity Title" />
                <button type="submit">Search</button>
            </form>
            <div className="rightDiv">
                <p>{username}</p>
                <div className="imageBox" onClick={()=>{(dropDown)?setDropDown(false):setDropDown(true)}}>
                    <div className="circle">

                    </div>
                    <i>
                        <FaAngleDown />
                    </i>
                    <div className={(dropDown)? 'dropdown openByHeight' : 'dropdown closeByHeight'}>
                        <Link to="/dashboard" className="options">
                            Dashboard
                        </Link>
                        <Link to="/activities" className="options">
                            Activities
                        </Link>
                        <Link to="/archives" className="options">
                            Archives
                        </Link>
                        <Link to="/trashbin" className="options">
                            Trash Bin
                        </Link>
                        <Link to="/starred" className="options">
                            Starred
                        </Link>
                        <Link to="/completed" className="options">
                            Completed
                        </Link>
                        <hr />
                        <Link to="/" className="options">
                            Profile
                            <i><FaUser/></i>
                        </Link>
                        <p className="options">
                            Switch <i><FaMoon /></i>
                        </p>
                        <p className="options">
                            Notifications <i><FaBell/></i>
                        </p>
                        <p className="options" onClick={handleLogout}>
                            Logout
                            <i>
                                <FaArrowRight />
                            </i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}