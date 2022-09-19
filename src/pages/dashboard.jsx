import { Helmet } from "react-helmet"
import SideNav from "../components/sidenav"
import Header from "../components/header"
import DashImage from "../assets/dash_image.svg"
import TotalImage from "../assets/total_image.png"
import DueImage from "../assets/due_image.png"
import CompleteImage from "../assets/complete_image.png"
import ArchivedImage from "../assets/archived_image.png"
import UnfinishedImage from "../assets/unfinished_image.png"
import TrashedImage from "../assets/trashed_image.png"
import StarredImage from "../assets/starred_image.png"
import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa"
import { useState } from "react"

export default function Dashboard(){
    const [TotalActivities, SetTotalActivities] = useState(0);
    const [DueActivities, SetDueActivities] = useState(0);
    const [CompletedActivities, SetCompletedActivities] = useState(0);
    const [ArchivedActivities, SetArchivedActivities] = useState(0);
    const [UnfinishedActivities, SetUnfinishedActivities] = useState(0);
    const [TrashedActivities, SetTrashedActivities] = useState(0);
    const [StarredActivities, SetStarredActivities] = useState(0);

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
                        <div className="create">
                            <i>
                                <FaPlus />
                            </i> <br />
                            <p>Create New Schedule</p>
                        </div>
                    </div> <br />

                    <div className="counts">
                        <div className="cards">
                            <div className="imageDiv blue">
                                <img src={TotalImage} alt="" />
                            </div>
                            <div className="text">
                                <h1>
                                    {TotalActivities}
                                </h1>
                                <p>Total Activities</p>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="imageDiv yellow">
                                <img src={DueImage} alt="" />
                            </div>
                            <div className="text">
                                <h1>
                                    {DueActivities}
                                </h1>
                                <p>Activities Due Today</p>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="imageDiv completePink">
                                <img src={CompleteImage} alt="" />
                            </div>
                            <div className="text">
                                <h1>
                                    {CompletedActivities}
                                </h1>
                                <p>Activities Completed</p>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="imageDiv dashGray">
                                <img src={ArchivedImage} alt="" />
                            </div>
                            <div className="text">
                                <h1>
                                    {ArchivedActivities}
                                </h1>
                                <p>Archived Activities</p>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="imageDiv dashGreen">
                                <img src={UnfinishedImage} alt="" />
                            </div>
                            <div className="text">
                                <h1>
                                    {UnfinishedActivities}
                                </h1>
                                <p>Unfinished Activities</p>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="imageDiv dashPurple">
                                <img src={TrashedImage} alt="" />
                            </div>
                            <div className="text">
                                <h1>
                                    {TrashedActivities}
                                </h1>
                                <p>Trashed Activities</p>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="imageDiv darkerBlue">
                                <img src={StarredImage} alt="" />
                            </div>
                            <div className="text">
                                <h1>
                                    {StarredActivities}
                                </h1>
                                <p>Starred Activities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}