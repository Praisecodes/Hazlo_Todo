import {Helmet} from "react-helmet"
import Logo from "../assets/hazlo-logo.png"
import {useNavigate} from "react-router-dom"
import {useState} from "react"

function Login(){
    let nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function vaidateLogin(event){
        event.preventDefault();
        localStorage.setItem('username', username);
    }

    function toSignUp(){
        nav('/signup')
    }

    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Login</title>
        </Helmet>
        <div className="loginContainer">
            <div className="container">
                <div className="left">
                    <img src={Logo} alt="" />
                    <h2>Hazlo Todo</h2>
                </div>
                <div className="right">
                    <h2>Login</h2>
                    <form onSubmit={(e)=>{vaidateLogin(e)}}>
                        <input type="text" placeholder="Enter Your Email" onChange={(e)=>{setUsername(e.target.value)}} />
                        <input type="password" placeholder="Enter Your Password" onChange={(e)=>{setPassword(e.target.value)}} />
                        <button type="submit">Login</button>
                        <p>Don't have an account? <span onClick={toSignUp}>Sign Up</span></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login