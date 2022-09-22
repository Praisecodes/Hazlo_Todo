import Logo from "../../assets/hazlo-logo.png"
import {useNavigate} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import { useState } from "react";

function Header(){
    let navigate = useNavigate();
    const [dropdown, setDropDown] = useState(false);

    function toLogin(){
        navigate("/login")
    }

    function toSignup(){
        navigate("/signup")
    }

    return (
        <div className="homeTopper">
            <h2>
                <img src={Logo} alt="" />
                Hazlo Todo</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
            </ul>
            <div className="actionButtons">
                <button onClick={toLogin} className="buttons loginbtn">Login</button>
                <button onClick={toSignup} className="buttons signupbtn">Sign Up</button>
            </div>
            <div className="navBtn" onClick={()=>{(dropdown)?setDropDown(false):setDropDown(true)}}>
                <i><FaBars /></i>
                <div className={(dropdown)?"dropdown openByHeight" : "dropdown closeByHeight"}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Support</p>
                    <button className="login" onClick={toLogin}>
                        Login
                    </button>
                    <button className="signup" onClick={toSignup}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header