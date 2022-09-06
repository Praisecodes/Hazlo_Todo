import Logo from "../../assets/hazlo-logo.png"
import {useNavigate} from "react-router-dom"

function Header(){
    let navigate = useNavigate();

    function toLogin(){
        navigate("/login")
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
                <button className="buttons signupbtn">Sign Up</button>
            </div>
        </div>
    )
}

export default Header