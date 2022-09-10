import { Helmet } from "react-helmet";
import SideNav from "../components/sidenav";
import Header from "../components/header"

export default function Archives(){
    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Archives</title>
        </Helmet>

        <div className="container">
            <SideNav section="archives" />

            <div className="mainContainer">
                <Header />

                <div className="mainContent">
                    
                </div>
            </div>
        </div>
        </>
    )
}