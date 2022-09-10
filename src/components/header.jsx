import { FaAngleDown, FaBell, FaMoon } from "react-icons/fa"

export default function Header(){
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
                <p>Christian</p>
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