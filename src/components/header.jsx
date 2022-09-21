import { FaAngleDown, FaBell, FaMoon } from "react-icons/fa"
import { useState, useTransition } from "react"

export default function Header(){
    const [username, setUsername] = useState(localStorage.getItem('username'));
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
                <div className="imageBox">
                    <div className="circle">

                    </div>
                    <i>
                        <FaAngleDown />
                    </i>
                </div>
            </div>
        </div>
        </>
    )
}