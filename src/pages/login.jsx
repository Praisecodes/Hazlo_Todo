import {Helmet} from "react-helmet"
import Logo from "../assets/hazlo-logo.png"
import {useNavigate} from "react-router-dom"

function Login(){
    let nav = useNavigate();

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
                    <form onSubmit={(e)=>{e.preventDefault(); nav("/workarea")}}>
                        <input type="email" placeholder="Enter Your Email" />
                        <input type="password" placeholder="Enter Your Password" />
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