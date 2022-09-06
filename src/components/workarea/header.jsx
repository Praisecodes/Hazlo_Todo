import {FaBell, FaMoon, FaAngleDown} from "react-icons/fa"

function Header(){
    return (
        <>
        <div className="header">
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="search" placeholder="Activity Title" />
                <button type="submit">Search</button>
            </form>
            <div className="header_menu">
                <i><FaMoon /></i>
                <i><FaBell /></i>
                <p>Christian</p>
                <div className="circle_dropdown">
                    <div className="circle"></div>
                    <i><FaAngleDown /></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header