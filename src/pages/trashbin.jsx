import { Helmet } from "react-helmet";
import SideNav from "../components/sidenav";

export default function TrashBin(){
    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Trash Bin</title>
        </Helmet>

        <div className="container">
            <SideNav section="trashBin" />
        </div>
        </>
    )
}