import {Helmet} from "react-helmet"
import Header from "../components/workarea/header"

function Workarea(){
    return (
        <>
        <Helmet>
            <title>Hazlo Todo | Workarea</title>
        </Helmet>

        <Header />
        </>
    )
}

export default Workarea