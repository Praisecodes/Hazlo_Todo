import { Helmet } from "react-helmet";
import SideNav from "../components/sidenav";
import Header from "../components/header"

export default function Starred(){
    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Starred Activities</title>
        </Helmet>

        <div className="container">
            <SideNav section="starred" />

            <div className="mainContainer">
                <Header />

                <div className="mainContent">
                    
                </div>
            </div>
        </div>
        </>
    )
}