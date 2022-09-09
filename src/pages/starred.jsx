import { Helmet } from "react-helmet";
import SideNav from "../components/sidenav";

export default function Starred(){
    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Starred Activities</title>
        </Helmet>

        <div className="container">
            <SideNav section="starred" />
        </div>
        </>
    )
}