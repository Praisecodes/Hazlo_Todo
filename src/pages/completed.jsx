import SideNav from "../components/sidenav";
import { Helmet } from "react-helmet";

export default function Completed(){
    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Completed Activities</title>
        </Helmet>

        <div className="container">
            <SideNav section="completed" />
        </div>
        </>
    )
}