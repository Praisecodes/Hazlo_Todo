import {Helmet} from "react-helmet"
import Logo from "../assets/hazlo-logo.png"
import {useNavigate} from "react-router-dom"

function Signup(){
    let navigate = useNavigate();

    function toLogin(){
        navigate('/login');
    }
    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Signup</title>
        </Helmet>
        <div className="signupContainer">
            <div className="container">
                <div className="left">
                    <h2>Sign Up</h2>
                    <form onSubmit={(e)=>{e.preventDefault(); navigate('/login')}}>
                        <input type="text" placeholder="Enter Your Fullname" />
                        <input type="email" placeholder="Enter Your Email" />
                        <input type="text" placeholder="Enter Your Username" />
                        <input type="password" placeholder="Enter Your Password" />
                        <input type="password" placeholder="Confirm Your Password" />
                        <button type="submit">Sign Up</button>
                        <p>Already A Member? <span onClick={toLogin}>Login Here</span></p>
                    </form>
                </div>
                <div className="right">
                    <img src={Logo} alt="" />
                    <h2>Hazlo Todo</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup