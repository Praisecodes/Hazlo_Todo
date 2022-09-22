import {Helmet} from "react-helmet"
import Logo from "../assets/hazlo-logo.png"
import {useNavigate} from "react-router-dom"
import {useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Signup(){
    let navigate = useNavigate();
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signingUp, setSigningUp] = useState(false);

    function signUpUser(event){
        event.preventDefault();

        const validEmail = /[A-Z0-9a-z\W]{3,}[@][a-z]{2,}[\.][a-z]{2,}/;
        const validName = /[A-Za-z\-\'\. ]{1,}/;
        const validUsername = /^[A-Za-z\W]{3,}$/;

        if(email.match(validEmail)){
            if(fullname.match(validName)){
                if(username.match(validUsername)){
                    if(confirmPassword === password){
                        setSigningUp(true);
                        fetch("https://hazloapi.herokuapp.com/signup.php", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                'fullname': fullname,
                                'username': username,
                                'email': email,
                                'password': password
                            })
                        })
                        .then((res)=>{
                            let status = res.status;
                            switch(status){
                                case 200:
                                    navigate('/login');
                                    break;
                                case 201:
                                    setSigningUp(false);
                                    toast.update("No Email Sent, Just Login",{
                                        position: toast.POSITION.TOP_CENTER,
                                        draggable: false
                                    })
                                    break;
                                case 500:
                                    console.log(res.statusText);
                                    setSigningUp(false);
                                    break;
                                default:
                                    toast.error("Error!!",{
                                        draggable: false,
                                        position: toast.POSITION.TOP_RIGHT
                                    });
                                    setSigningUp(false);
                            }
                        })
                    }
                    else{
                        toast.error("Passwords Don't Match", {
                            draggable: false
                        })
                    }
                }
                else{
                    toast.error("Username Mismatch", {
                        draggable: false
                    })
                }
            }
            else{
                toast.error("Fullname Mismatch", {
                    draggable: false
                })
            }
        }
        else{
            toast.error("Invalid Email", {
                draggable: false
            })
        }
    }

    function toLogin(){
        navigate('/login');
    }
    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Signup</title>
        </Helmet>
        <div className="signupContainer">
            <ToastContainer />
            <div className="container">
                <div className="left">
                    <h2>Sign Up</h2>
                    <form onSubmit={(e)=>{signUpUser(e)}}>
                        <input type="text" placeholder="Enter Your Fullname" onChange={(e)=>{setFullname(e.target.value)}} />
                        <input type="email" placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}} />
                        <input type="text" placeholder="Enter Your Username" onChange={(e)=>{setUsername(e.target.value)}} />
                        <input type="password" placeholder="Enter Your Password" onChange={(e)=>{setPassword(e.target.value)}} />
                        <input type="password" placeholder="Confirm Your Password" onChange={(e)=>{setConfirmPassword(e.target.value)}} />
                        <button type="submit">
                            {(signingUp)? 'Please Wait...' : 'Sign Up'}
                        </button>
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