import {Helmet} from "react-helmet"
import SideNav from "../components/workarea/sidenav"
import MainContainer from "../components/workarea/mainContainer"

function Workarea(){
    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Workarea</title>
        </Helmet>

        <div className="container">
            <MainContainer />
            <SideNav />
        </div>
        </>
    )
}

export default Workarea