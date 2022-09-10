import { Helmet } from "react-helmet"
import SideNav from "../components/sidenav"
import Header from "../components/header"
import DashImage from "../assets/dash_image.svg"
import { Link } from "react-router-dom"

export default function Dashboard(){
    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Dashboard</title>
        </Helmet>

        <div className="container">
            <SideNav section="dashboard" />

            <div className="mainContainer">
                <Header />

                <div className="mainContent dashboard">
                    <div className="welcome">
                        <div className="welcomeMsg">
                            <div className="message">
                                <p>
                                    Hello Christian, welcome back... <br />
                                    <span>You have no pending task</span>
                                </p> <br />
                                <Link to="/activities" className="viewAll">
                                    View All
                                </Link>
                            </div>
                            <div className="image">
                                <img src={DashImage} alt="" />
                            </div>
                        </div>
                        <div className="create"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}