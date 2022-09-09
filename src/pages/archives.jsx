import { Helmet } from "react-helmet";
import SideNav from "../components/sidenav";

export default function Archives(){
    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Archives</title>
        </Helmet>

        <div className="container">
            <SideNav section="archives" />
        </div>
        </>
    )
}