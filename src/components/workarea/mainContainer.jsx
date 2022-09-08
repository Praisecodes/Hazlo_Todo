import Header from "./header"
import Dashboard from "./layouts/dashboard"

function MainContainer(){
    return (
        <>
        <div className="mainContainer">
            <Header />
            <div className="mainContainer_content">
                {/* <Dashboard /> */}
            </div>
        </div>
        </>
    )
}

export default MainContainer