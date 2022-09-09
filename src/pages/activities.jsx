import { Helmet } from "react-helmet";
import SideNav from "../components/sidenav";

export default function Activities(){
    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Activities</title>
        </Helmet>

        <div className="container">
            <SideNav section="activities" />
        </div>
        </>
    )
}