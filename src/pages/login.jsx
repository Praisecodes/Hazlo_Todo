import {Helmet} from "react-helmet"
import Logo from "../assets/hazlo-logo.png"
import {useNavigate} from "react-router-dom"
import {useState} from "react"
import { useEffect } from "react";

function Login(){
    let nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loggingIn, setLoggingIn] = useState(false);
    
    useEffect(()=>{
        if(token != null){
            nav('/dashboard');
        }
    }, [token]);

    function vaidateLogin(event){
        event.preventDefault();
        setLoggingIn(true);
        
        fetch("https://hazloapi.herokuapp.com/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        .then((res)=>{
            let status = res.status;
            switch(status){
                case 200:
                    localStorage.setItem('username', username);
                    return res.text();
                    setLoggingIn(false);
                    break;
                case 403:
                    console.log("Unauthorized");
                    setLoggingIn(false);
                    break;
                case 404:
                    console.log("No User Found");
                    setLoggingIn(false);
                    break;
                case 500:
                    console.log(res.statusText);
                    setLoggingIn(false);
                    break;
                default:
                    console.log("No Input");
                    setLoggingIn(false);
            }
        })
        .then((data)=>{
            if(data){
                localStorage.setItem('token', data);
                nav("/dashboard");
            }
        })
        .catch((err)=>{console.log(err)});
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
                        <input type="text" placeholder="Enter Your Username" onChange={(e)=>{setUsername(e.target.value)}} />
                        <input type="password" placeholder="Enter Your Password" onChange={(e)=>{setPassword(e.target.value)}} />
                        <button type="submit">
                            {(loggingIn)?'Please Wait...':'Login'}
                        </button>
                        <p>Don't have an account? <span onClick={toSignUp}>Sign Up</span></p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login