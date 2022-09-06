import {FaBell, FaMoon} from "react-icons/fa"

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
            </div>
        </div>
        </>
    )
}

export default Header