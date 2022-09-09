import { Helmet } from "react-helmet"
import SideNav from "../components/sidenav"
import Header from "../components/header"

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
            </div>
        </div>
        </>
    )
}