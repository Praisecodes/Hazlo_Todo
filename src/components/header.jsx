import { FaAngleDown, FaArrowLeft, FaArrowRight, FaBell, FaMoon } from "react-icons/fa"
import { useState, useTransition } from "react"
import { useNavigate } from "react-router-dom";

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
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="search" placeholder="Enter Activity Title" />
                <button type="submit">Search</button>
            </form>
            <div className="rightDiv">
                <i>
                    <FaMoon />
                </i>
                <i>
                    <FaBell />
                </i>
                <p>{username}</p>
                <div className="imageBox" onClick={()=>{(dropDown)?setDropDown(false):setDropDown(true)}}>
                    <div className="circle">

                    </div>
                    <i>
                        <FaAngleDown />
                    </i>
                    <div className={(dropDown)? 'dropdown openByHeight' : 'dropdown closeByHeight'}>
                        <p onClick={handleLogout}>
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